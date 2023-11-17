  import React, { useState ,useEffect  } from 'react';
  import './App.css';
// Array of background images
const backgroundImages = [
  
  '/codeflex.png',
  '/a1338166.png',
  '/a1.jpg',
  // '/a2.jpg',
  '/a3.jpg',
  // '/a4.jpg',
  // '/a5.jpg',
  '/a6.jpg',
  '/a7.jpg',
  // '/a8.jpg',
  '/a9.jpg',
  '/a10.jpg'
  
  // Add more images as needed
];
function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // This is where setCurrentImageIndex is defined
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => { // useEffect is used here
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({ email, password });
  };

 

  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}>
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
