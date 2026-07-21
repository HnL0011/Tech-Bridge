import { useState } from "react";
import logo from "../assets/logo.png";

function Login({ setCurrentPage }) {
  // Switches between Login and Create Account
  const [isCreatingAccount, setIsCreatingAccount] =
    useState(false);

  // Stores the information typed into the form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Updates the correct form field when the user types
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  // Handles login and account creation
  function handleSubmit(event) {
    event.preventDefault();

    if (
      isCreatingAccount &&
      formData.password !== formData.confirmPassword
    ) {
      alert("The passwords do not match.");
      return;
    }

    if (isCreatingAccount) {
      alert("Account created successfully!");
    } else {
      alert("Login successful!");
    }

    setCurrentPage("home");
  }

  // Switches between the login and account creation forms
  function switchForm() {
    setIsCreatingAccount((previousValue) => !previousValue);

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <main className="login-page">
      <section className="login-card">
        {/* TechBridge logo */}
        <img
          src={logo}
          alt="Bridge with a Wi-Fi signal"
          className="login-logo"
        />

        <h1 className="app-title">TechBridge</h1>

        <p className="login-description">
          {isCreatingAccount ? (
            <>
              Create an account to save guides and track your
              progress.
            </>
          ) : (
            <>
              Bridging the Gap Between
              <br />
              People and Technology
            </>
          )}
        </p>

        <form onSubmit={handleSubmit}>
          {/* Full name appears only while creating an account */}
          {isCreatingAccount && (
            <>
              <label htmlFor="name">Full Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </>
          )}

          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Confirm password appears only during account creation */}
          {isCreatingAccount && (
            <>
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Enter your password again"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </>
          )}

          <button type="submit" className="primary-button">
            {isCreatingAccount
              ? "Create Account"
              : "Log In"}
          </button>
        </form>

        <div className="form-divider">
          <span>or</span>
        </div>

        <button
          type="button"
          className="secondary-button"
          onClick={switchForm}
        >
          {isCreatingAccount
            ? "Already Have an Account? Log In"
            : "Create an Account"}
        </button>

        {!isCreatingAccount && (
          <button
            type="button"
            className="text-button"
            onClick={() => setCurrentPage("home")}
          >
            Continue as Guest
          </button>
        )}
      </section>
    </main>
  );
}

export default Login;