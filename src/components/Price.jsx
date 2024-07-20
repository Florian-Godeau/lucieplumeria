import React, { useState } from 'react';
import Banner from './Banner';
import seanceImage from '../assets/images/seance.webp';
import individualImage from '../assets/images/individual.webp';
import collectifImage from '../assets/images/collectif.webp';
import entrepriseImage from '../assets/images/entreprise.webp';
import fiveSeanceImg from '../assets/images/5seance.webp';
import tenSeanceImg from '../assets/images/10seance.webp';

function Price() {
  const [selectedTab, setSelectedTab] = useState('sessions');

  const renderSessions = () => (
    <div className="cards-container">
      <div className="card">
        <img src={individualImage} alt="Séance Individuelle de suivi" className="card-image" />
        <div className="card-text">
          <h3>Séance Individuelle</h3>
          <p>1h</p>
          <p>50€</p>
        </div>
      </div>
      <div className="card">
        <img src={collectifImage} alt="Séance Collective" className="card-image" />
        <div className="card-text">
          <h3>Séance Collective</h3>
          <p>1h</p>
          <p>15€ / personne</p>
        </div>
      </div>
      <div className="card single-card">
        <img src={entrepriseImage} alt="Séance en Entreprise" className="card-image" />
        <div className="card-text">
          <h3>Séance en Entreprise</h3>
          <p>Me contacter</p>
        </div>
      </div>
    </div>
  );

  const renderFormulas = () => (
    <div className="cards-container">
      <div className="card">
        <img src={fiveSeanceImg} alt="5 séances" className="card-image" />
        <div className="card-text">
          <h3>Forfait 5 séances</h3>
          <p>240€</p>
          <p>Forfait 5 séances avec la première offerte, soit 6 séances à prix tout doux</p>
          <p>Valable 6 mois</p>
        </div>
      </div>
      <div className="card">
        <img src={tenSeanceImg} alt="10 séances" className="card-image" />
        <div className="card-text">
          <h3>Forfait 10 séances</h3>
          <p>450€</p>
          <p>Forfait 10 séances avec la première offerte, soit 11 séances à prix tout doux</p>
          <p>Valable 12 mois</p>
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
        <div className={`tab ${selectedTab === 'sessions' ? 'active' : ''}`} onClick={() => setSelectedTab('sessions')}>
          Séances
        </div>
        <div className={`tab ${selectedTab === 'formulas' ? 'active' : ''}`} onClick={() => setSelectedTab('formulas')}>
          Formules
        </div>
      </div>
      {selectedTab === 'sessions' ? renderSessions() : renderFormulas()}
    </div>
  );
}

export default Price;