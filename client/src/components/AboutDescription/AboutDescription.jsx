import { publicAsset } from '../../publicAsset';
import './AboutDescription.css';

const AboutDescription = () => {
  return (
    <section className="about-description-section">
      <div className="about-description-content">
        <div className="about-description-text">
          <h2 className="about-description-title">About ESA</h2>
          <p className="about-description-description">
            The Engineering Student Association (ESA) is an umbrella organization that connects the engineering student body with UCLA Samueli School of Engineering. We host school-wide events like Engineering Welcome Day and Bruin Engineers Week, support engineering student organizations, and organize wellness programs and recognition ceremonies to build a thriving engineering community.
          </p>
        </div>
        <div className="about-description-image">
          <img src={publicAsset('board-pic.png')} alt="ESA Board at 2026 Retreat" className="about-description-image-content" />
        </div>
      </div>
    </section>
  );
};

export default AboutDescription;

