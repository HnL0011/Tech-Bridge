function Login({ setCurrentPage }) {
  return (
    <div className="app">

      {/* Login Card */}
      <div className="login-card">

        {/* App Title */}
        <h1>TechBridge</h1>
        <p>Your trusted technology assistant</p>

        {/* Login Form */}
        <form>

          {/* Email */}
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          {/* Password */}
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />

          {/* Login Button */}
          <button
            type="button"
            onClick={() => setCurrentPage("home")}
          >
            Log In
          </button>

        </form>

        {/* Create Account */}
        <button className="secondary-button">
          Create Account
        </button>

        {/* Continue as Guest */}
        <button
          className="guest-button"
          onClick={() => setCurrentPage("home")}
        >
          Continue as Guest
        </button>

      </div>

    </div>
  );
}

export default Login;