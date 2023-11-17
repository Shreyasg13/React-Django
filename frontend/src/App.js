  import React, { useState ,useEffect  } from 'react';
  import './App.css';
// Array of background images
const backgroundImages = [
  
  '/codeflex.png',
  '/a1338166.png',
  '/a1.jpg',
  '/a3.jpg',
   '/home-bg2.jpg',
  '/home-bg3.jpg',
  '/a9.jpg',
  
  // Add more images as needed
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Optionally preload images
    backgroundImages.forEach(image => {
      const img = new Image();
      img.src = image;
    });

    // Update background image every 10 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Update background style
    const newBackgroundStyle = {
      backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      transition: 'background-image 0.5s ease-in-out',
    };
    setBackgroundStyle(newBackgroundStyle);
  }, [currentImageIndex]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({ email, password });
  };

  return (
    <div className="app" style={backgroundStyle}>
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
