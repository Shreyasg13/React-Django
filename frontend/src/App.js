import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    console.log({ email, password });
  };

  return (
    <div className="app">
      <div className="loginContainer">
        <h1 className="appTitle">CodeFlex Hub</h1>
        <form className="signInForm" onSubmit={handleSubmit}>
          <h2 className="signInHeading">Sign In</h2>
          <div className="formGroup">
            <input 
              type="email" 
              className="formInput"
              placeholder="Email or phone number" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className="formGroup">
            <input 
              type="password" 
              className="formInput"
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <div className="formOptions">
            <label className="rememberMe">
              <input type="checkbox" />
              Remember me     
            </label>
            <a href="#" className="helpLink">Need help?</a>
          </div>
          <button type="submit" className="signInButton">Sign In</button>
          <div className="bottomContainer">
            <span>New to CodeFlex Hub?</span> <a href="#" className="signUpLink">Sign up now.</a>
            <p className="recaptchaNotice">
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" >Learn more.</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
