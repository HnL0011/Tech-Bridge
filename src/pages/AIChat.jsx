import { useEffect, useRef, useState } from "react";

function AIChat({ openSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi! I am the TechBridge assistant. What technology problem can I help you with?",
    },
  ]);

  const messageListRef = useRef(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop =
        messageListRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  async function handleSubmit(event) {
    event.preventDefault();

    const cleanedMessage = message.trim();

    if (!cleanedMessage || isLoading) {
      return;
    }

    const previousMessages = messages;

    const userEntry = {
      id: crypto.randomUUID(),
      sender: "user",
      text: cleanedMessage,
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userEntry,
    ]);

    setMessage("");
    setIsLoading(true);

    try {
      const apiResponse = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: cleanedMessage,
          history: previousMessages,
        }),
      });

      const data = await apiResponse.json();

      if (!apiResponse.ok) {
        throw new Error(
          data.error ||
            "The AI assistant could not answer.",
        );
      }

      const botEntry = {
        id: crypto.randomUUID(),
        sender: "bot",
        text: data.answer,
        searchTerm: cleanedMessage,
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        botEntry,
      ]);
    } catch (error) {
      console.error("AI assistant error:", error);

      const errorEntry = {
        id: crypto.randomUUID(),
        sender: "bot",
        text:
          error.message ||
          "I could not connect to the AI assistant.",
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        errorEntry,
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleGuideSearch(searchTerm) {
    openSearch(searchTerm);
    setIsOpen(false);
  }

  function clearConversation() {
    setMessages([
      {
        id: crypto.randomUUID(),
        sender: "bot",
        text: "The conversation has been cleared. What technology problem can I help you with?",
      },
    ]);

    setMessage("");
  }

  return (
    <div className="ai-chat-container">
      {isOpen && (
        <section
          className="ai-chat-panel"
          aria-label="TechBridge AI assistant"
        >
          <header className="ai-chat-header">
            <div>
              <strong>TechBridge Assistant</strong>
              <span>AI technology help</span>
            </div>

            <button
              type="button"
              className="ai-close-button"
              aria-label="Close AI assistant"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </header>

          <div className="ai-chat-notice">
            Never share passwords, verification codes,
            payment information, or other private details.
          </div>

          <div
            className="ai-message-list"
            ref={messageListRef}
            aria-live="polite"
          >
            {messages.map((chatMessage) => (
              <div
                key={chatMessage.id}
                className={`ai-message ${
                  chatMessage.sender === "user"
                    ? "ai-user-message"
                    : "ai-bot-message"
                }`}
              >
                <p>{chatMessage.text}</p>

                {chatMessage.searchTerm && (
                  <button
                    type="button"
                    className="ai-guide-button"
                    onClick={() =>
                      handleGuideSearch(
                        chatMessage.searchTerm,
                      )
                    }
                  >
                    Search Related Guides
                  </button>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="ai-message ai-bot-message">
                <p>Thinking...</p>
              </div>
            )}
          </div>

          <form
            className="ai-chat-form"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="ai-message"
              className="visually-hidden"
            >
              Ask the TechBridge assistant
            </label>

            <input
              id="ai-message"
              type="text"
              maxLength="1000"
              placeholder="Ask a technology question..."
              value={message}
              disabled={isLoading}
              onChange={(event) =>
                setMessage(event.target.value)
              }
            />

            <button
              type="submit"
              className="ai-send-button"
              disabled={isLoading || !message.trim()}
            >
              {isLoading ? "Thinking..." : "Send"}
            </button>
          </form>

          <button
            type="button"
            className="ai-clear-button"
            disabled={isLoading}
            onClick={clearConversation}
          >
            Clear Conversation
          </button>
        </section>
      )}

      <button
        type="button"
        className="ai-floating-button"
        aria-expanded={isOpen}
        onClick={() =>
          setIsOpen((currentValue) => !currentValue)
        }
      >
        <span className="ai-floating-icon">💬</span>

        <span>{isOpen ? "Close Help" : "AI Help"}</span>
      </button>
    </div>
  );
}

export default AIChat;