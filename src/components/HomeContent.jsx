import React from 'react';
import sunflower from '../assets/images/sunflower.webp';

function HomeContent() {
    return (
      <div className="home-content">
        <div className="banner">
          <img src={sunflower} alt="Sunflower" className="banner-image" />
        </div>
        <div className="text-content">
          <h1>Bienvenue sur mon site</h1>
          <p>Ceci est le contenu de la page d'accueil.</p>
        </div>
      </div>
    );
  }

export default HomeContent;
