import { Link } from 'react-router-dom';
import { publicAsset } from '../../publicAsset';
import './HeroComponent.css';

const userId = localStorage.getItem('token') || null;

const HeroComponent = () => {
  return (
    <section className="hero-section">
      <div className="hero-graphic">
        <img src={publicAsset('lines.svg')} alt="" className="hero-waves" />
      </div>
      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">ClubFinder Platform</h1>
            <p className="hero-description">
              Connecting UCLA students to Engineering clubs and organizations
            </p>
          </div>
          {userId === null ? 
          <Link to="/auth/register" className="hero-button">
            Create an Account
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
           : ""}
          <p className="hero-attribution">Created by Engineering Student Association @ UCLA</p>
        </div>
        <div className="hero-logo">
          <img src={publicAsset('esa-logo.png')} alt="ESA Logo" className="hero-logo-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;

