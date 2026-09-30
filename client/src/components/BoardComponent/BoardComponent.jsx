import { publicAsset } from '../../publicAsset';
import './BoardComponent.css';

const BoardComponent = () => {
  const executive = [
    { name: 'Lian Elsa Linton', role: 'External Vice President', image: publicAsset('board/Lian_Elsa_Linton_EVP.png') },
    { name: 'Justin Xu', role: 'President', image: publicAsset('board/Justin_Xu_President.png') },
    { name: 'Aidan O\'Leary', role: 'Internal Vice President', image: publicAsset('board/Aidan_O_Leary_IVP.png') },
    { name: 'Megan Lu', role: 'Treasurer', image: publicAsset('board/Megan_Lu_Treasurer.png') },
  ];

  const officers = [
    { name: 'Grace Li', role: 'Secretary', image: publicAsset('board/Grace_Li_Secratary.png') },
    { name: 'Anastasia Yang', role: 'Co-Webmaster', image: publicAsset('board/Anastasia_Yang_Co-Webmaster.png') },
    { name: 'Carter Ballow', role: 'Co-Webmaster', image: publicAsset('board/Carter_Ballow_Co-Webmaster.png') },
    { name: "Darren Schuttinger", role: 'Alumni Relations Chair', image: publicAsset('board/Darren_ Schuttinger_Alumni_Relations_Chair.png') },
    { name: 'Conner Lam', role: 'Corporate Chair', image: publicAsset('board/Conner_Lam_Corporate_Chair.png') },
    { name: 'Alina Wang', role: 'Publicity Chair', image: publicAsset('board/Alina_Wang_Publicity.png') },
    { name: "Al Ponce", role: 'Membership Chair', image: publicAsset('board/Al_Ponce_Membership_Chair.png') },
    { name: 'Joanne Yu', role: 'Social Chair', image: publicAsset('board/Joanne_Yu_Social_Chair.png') },
    { name: 'Sarah AlSabah', role: 'Wellness Chair', image: publicAsset('board/Sarah_AlSabah_Wellness_Chair.png') },
    { name: "Natalie Ngo", role: 'Facilities Manager', image: publicAsset('board/Natalie_Ngo_Facilities_Manager.png') },
    { name: 'Evelyn Han', role: 'Historian & Transfer Representative', image: publicAsset('board/Evelyn_Han_Historian.png') }
  ];

  return (
    <section className="board-section">
      <h2 className="board-title">The Board</h2>
      
      {/* Executive Section */}
      <div className="board-subsection">
        <h3 className="board-subtitle">EXECUTIVE</h3>
        <div className="board-grid board-grid-executive">
          {executive.map((member, index) => (
            <div key={index} className="board-card">
              <div className="board-avatar">
                <img src={member.image} alt={member.name} className="board-avatar-image" />
              </div>
              <p className="board-name">{member.name}</p>
              <p className="board-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Officers Section */}
      <div className="board-subsection">
        <h3 className="board-subtitle">OFFICERS</h3>
        <div className="board-grid board-grid-officers">
          {officers.map((member, index) => (
            <div key={index} className="board-card">
              <div className="board-avatar">
                <img src={member.image} alt={member.name} className="board-avatar-image" />
              </div>
              <p className="board-name">{member.name}</p>
              <p className="board-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardComponent;

