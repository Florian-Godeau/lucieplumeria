import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from './Banner';
import sunflower from '../assets/images/sunflowernew.webp';
import testlobby from '../assets/images/testlobby.webp';

function HomeContent() {
  useEffect(() => {
    AOS.init({ duration: 500 });

    // Ajouter le script Elfsight
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="home-content">
      <Banner src={sunflower} />
      <div className="home-content__three-columns">
        <div className="home-content__column" data-aos="about-fade-up" data-aos-offset="200">
          <div className="home-content__column-content">
            <div className="home-content__image-wrapper">
              <img src={testlobby} alt="Lucie Plumeria" className="home-content__image" />
            </div>
            <div className="home-content__text-wrapper">
              <h2>Plaisir et sérénité à Voiron</h2>
              <p>Je vous propose un espace de bien-être dédié à la relaxation et au bien-être du corps et de l'esprit. Ainsi, venez vous ressourcez avec des séances de sophrologie, des massages relaxants, le tout vous permettant de retrouver une harmonie profonde, une sérénité et un sentiment de paix.</p>
              <p>J'aime pouvoir vous proposer divers éléments vous permettant de vous retrouver pleinement en vous-même, selon vos préférences.</p>
              <p>Avec la sophrologie, je vous transmet un outil permettant une détente instantanée lors des séances, et une détente chez vous à votre rythme en reproduisant ce qu'on a fait en consultation.</p>
              <p>Avec le massage bien-être intuitif, je vous propose un moment afin de vous reconnecter à votre corps, dans une détente totale et profonde, permettant de lâcher le mental et de vous recentrer pleinement avec vous même.</p>
              <p>Avec le massage Qi Nei Zang, un massage du ventre, notre deuxième cerveau, là où se loge nos émotions. Ce massage a pour but de dénouer les tensions physiques et émotionnelles.</p>
              <p><strong><em>Mon but ici est que vous puissiez être autonome sur votre chemin, je vous donne des axes, des outils à utiliser tranquillement de votre côté, afin que vous-même vous puissiez retrouver pleinement qui vous êtes.</em></strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* Intégration du widget Elfsight */}
      <div className="home-content__reviews">
        <div className="elfsight-app-dcbb712d-5155-4511-bf7c-15d28051d10e" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
}

export default HomeContent;
