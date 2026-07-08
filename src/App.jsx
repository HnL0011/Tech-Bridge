import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Login Card */}
      <div className="login-card">

        {/* App Title */}
        <h1>TechBridge</h1>
        <p>Your trusted technology assistant</p>

        {/*Login Form */}
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          {/* Login Button */}
          <button type="submit">Log In</button>
        </form>
        
         {/* Create Account Button */}  
        <button className="secondary-button">Create Account</button>
        <button className="guest-button">Continue as Guest</button>
      </div>
    </div>
  );
}

export default App;