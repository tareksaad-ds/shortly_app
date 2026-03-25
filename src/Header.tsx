import './App.css';
import Image from './assets/hero-img.png';

function Header() {
  return (
    <div className="head-container">
      <nav className="nav">
        <h1 className="logo">Shortly</h1>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#join">Join us</a>
          <button onClick={() => {}}>Login</button>
        </div>
      </nav>
      <div className="head-content">
        <div className="left-panel">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed
            insights on how your links are performing.
          </p>
          <button onClick={() => {}}>Get Started</button>
        </div>
        <div className="right-panel">
          <img src={Image} alt="working" />
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="#ede9f8"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
