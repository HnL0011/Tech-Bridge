const SYSTEM_INSTRUCTIONS = `
You are the TechBridge technology-help assistant.

TechBridge helps older adults, beginners, people with memory
challenges, and anyone who needs simple technology instructions.

Follow these rules:

- Be friendly, patient, and supportive.
- Use plain language.
- Give short numbered steps whenever possible.
- Keep most answers under 200 words.
- Ask what device the user has when needed.
- Never claim that you accessed the user's device.
- Never ask for passwords, verification codes, payment details,
  Social Security numbers, or other private information.
- Warn the user before deleting files, resetting a device,
  changing passwords, or completing payment-related steps.
- Recommend official manufacturer support when appropriate.
- Clearly explain when professional repair may be needed.
`;

function extractAnswer(data) {
  if (!Array.isArray(data.steps)) {
    return "";
  }

  return data.steps
    .filter((step) => step.type === "model_output")
    .flatMap((step) =>
      Array.isArray(step.content) ? step.content : [],
    )
    .filter(
      (item) =>
        item.type === "text" &&
        typeof item.text === "string",
    )
    .map((item) => item.text)
    .join("\n")
    .trim();
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({
      error: "Only POST requests are allowed.",
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("GEMINI_API_KEY is missing.");

    return response.status(500).json({
      error: "The AI assistant has not been configured.",
    });
  }

  try {
    const { message, history = [] } = request.body ?? {};

    if (
      typeof message !== "string" ||
      message.trim() === ""
    ) {
      return response.status(400).json({
        error: "Please enter a technology question.",
      });
    }

    if (message.length > 1000) {
      return response.status(400).json({
        error:
          "Please keep your question under 1,000 characters.",
      });
    }

    const safeHistory = Array.isArray(history)
      ? history
          .filter(
            (item) =>
              typeof item?.text === "string" &&
              ["user", "bot"].includes(item?.sender),
          )
          .slice(-6)
      : [];

    const previousConversation = safeHistory
      .map((item) => {
        const name =
          item.sender === "user"
            ? "User"
            : "TechBridge Assistant";

        return `${name}: ${item.text}`;
      })
      .join("\n\n");

    const fullPrompt = `
${SYSTEM_INSTRUCTIONS}

Previous conversation:
${previousConversation || "No previous conversation."}

User's newest question:
${message.trim()}

Answer as the TechBridge assistant.
`;

    const geminiResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/interactions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          model: "gemini-3.6-flash",
          store: false,
          input: fullPrompt,
          generation_config: {
            thinking_level: "low",
            temperature: 0.4,
            max_output_tokens: 400,
          },
        }),
      },
    );

    const data = await geminiResponse.json();

    if (!geminiResponse.ok) {
      console.error("Gemini error:", data);

      if (geminiResponse.status === 429) {
        return response.status(429).json({
          error:
            "The free AI usage limit has been reached. Please try again later.",
        });
      }

      return response.status(502).json({
        error:
          data?.error?.message ||
          "Gemini could not generate an answer.",
      });
    }

    const answer = extractAnswer(data);

    if (!answer) {
      return response.status(502).json({
        error:
          "Gemini responded, but no readable answer was returned.",
      });
    }

    return response.status(200).json({
      answer,
    });
  } catch (error) {
    console.error("TechBridge AI error:", error);

    return response.status(500).json({
      error:
        "The AI assistant encountered an unexpected problem.",
    });
  }
}