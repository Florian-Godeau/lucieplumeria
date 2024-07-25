import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import seanceImage from '../assets/images/seance.webp';
import individualImage from '../assets/images/individual.webp';
import collectifImage from '../assets/images/collectif.webp';
import entrepriseImage from '../assets/images/entreprise.webp';
import fiveSeanceImg from '../assets/images/5seance.webp';
import tenSeanceImg from '../assets/images/10seance.webp';

function Price() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedTab, setSelectedTab] = useState('sessions');
  const navigate = useNavigate();

  const handleContactClick = (reason) => {
    navigate(`/contact?reason=${encodeURIComponent(reason)}`);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setTimeout(() => {
      AOS.refresh();
    }, 100); // Réinitialise les animations AOS pour les nouveaux éléments
  };

  const renderSessions = () => (
    <div className="cards-container">
      <div className="card" key="session1" data-aos="flip-right" data-aos-offset="100">
        <img src={individualImage} alt="Séance Individuelle" className="card-image" />
        <div className="card-text">
          <h3>Séance Individuelle</h3>
          <p>1h</p>
          <p>50€</p>
          <p>Les séances peuvent se faire en présentiel au cabinet mais également en visio</p>
          <button onClick={() => handleContactClick('Réservation séance individuelle / Formules')}>Réservation / Contact</button>
        </div>
      </div>
      <div className="card" key="session2" data-aos="flip-right" data-aos-offset="100">
        <img src={collectifImage} alt="Séance Collective" className="card-image" />
        <div className="card-text">
          <h3>Séance Collective</h3>
          <p>1h</p>
          <p>20€</p>
          <button onClick={() => handleContactClick('Réservation séance collective')}>Réservation / Contact</button>
        </div>
      </div>
      <div className="card single-card" key="session3" data-aos="flip-right" data-aos-offset="100">
        <img src={entrepriseImage} alt="Séance en Entreprise" className="card-image" />
        <div className="card-text">
          <h3>Séance en Entreprise</h3>
          <p>1h</p>
          <p>Me contacter</p>
          <button onClick={() => handleContactClick('Réservation / Demande séance en entreprise')}>Réservation / Contact</button>
        </div>
      </div>
    </div>
  );

  const renderFormulas = () => (
    <div className="cards-container">
      <div className="card" key="formula1" data-aos="flip-right" data-aos-offset="100">
        <img src={fiveSeanceImg} alt="5 séances" className="card-image" />
        <div className="card-text">
          <h3>Forfait 5 séances</h3>
          <p>240€</p>
          <p>Forfait 5 séances avec la première offerte, soit 6 séances à prix tout doux</p>
          <p>Les séances peuvent se faire en présentiel au cabinet mais également en visio</p>
          <p>Valable 6 mois</p>
          <button onClick={() => handleContactClick('Réservation séance individuelle / Formules')}>Réservation / Contact</button>
        </div>
      </div>
      <div className="card" key="formula2" data-aos="flip-right" data-aos-offset="100">
        <img src={tenSeanceImg} alt="10 séances" className="card-image" />
        <div className="card-text">
          <h3>Forfait 10 séances</h3>
          <p>450€</p>
          <p>Forfait 10 séances avec la première offerte, soit 11 séances à prix tout doux</p>
          <p>Les séances peuvent se faire en présentiel au cabinet mais également en visio</p>
          <p>Valable 12 mois</p>
          <button onClick={() => handleContactClick('Réservation séance individuelle / Formules')}>Réservation / Contact</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="price-content">
      <Banner src={seanceImage} />
      <div className="text-container">
        <div className="text-content">
          <h1>Tarifs</h1>
        </div>
      </div>
      <div className="tabs">
        <div className={`tab ${selectedTab === 'sessions' ? 'active' : ''}`} onClick={() => handleTabClick('sessions')}>
          Séances
        </div>
        <div className={`tab ${selectedTab === 'formulas' ? 'active' : ''}`} onClick={() => handleTabClick('formulas')}>
          Formules
        </div>
      </div>
      {selectedTab === 'sessions' ? renderSessions() : renderFormulas()}
    </div>
  );
}

export default Price;