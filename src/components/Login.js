import React, { useState } from 'react';
import './Login.css';  // Ensure this file is properly set up
import { Link } from 'react-router-dom';  // Import Link for navigation

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // State for handling login errors

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (username.trim() === '' || password.trim() === '') {
      setError('Both fields are required.');
      return;
    }

    // Reset error state
    setError('');

    // Handle the login logic (e.g., call an API or perform validation)
    console.log('Username:', username);
    console.log('Password:', password);

    // For now, just log the form values
    // Add actual login logic here, such as API calls
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>

        <button type="submit" className="btn-login">Login</button>
      </form>

      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
