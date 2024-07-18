import React from 'react';
import Banner from './Banner';
import sunflower from '../assets/images/sunflower.webp';

function HomeContent() {
  return (
    <div className="home-content">
      <Banner src={sunflower} />
      <div className="text-container">
        <div className="text-content">
          <h1>La Sophrologie</h1>
          <p>
            Vous vous demandez peut-être ce qu'est la sophrologie,<br />
            en quoi consiste t-elle,<br />
            et qu'apporte t-elle dans votre quotidien ?
          </p>
        </div>
      </div>
      <div className="three-columns">
        <div className="column">
          <h2>Petite histoire...</h2>
          <div className="column-content">
            <p>La sophrologie est une méthode de relaxation et de développement personnel fondée en 1960 par le neuropsychiatre Alfonso Caycedo. Originaire de Colombie, A. Caycedo a exercé en Espagne où il a développé cette technique en s'inspirant de diverses disciplines occidentales et orientales. Son objectif était de créer une méthode permettant d'améliorer la qualité de vie et le bien-être mental et physique des individus.</p>
            <p>La sophrologie combine des éléments de l'hypnose, du yoga, de la méditation, et de la psychologie positive. Le terme "sophrologie" vient du grec ancien, avec "sôs" signifiant "harmonie", "phren" signifiant "esprit", et "logos" signifiant "étude". Cela peut se traduire par "l'étude de l'harmonie de l'esprit".</p>
          </div>
        </div>
        <div className="column middle-column">
          <h2>Pour qui ? Pour quoi ?</h2>
          <div className="column-content">
            <p>Pour toute personne souhaitant mettre en lumière ses différents troubles et les appréhender au mieux : que soit la gestion du stress/des émotions, d'une phobie, de retrouver un sommeil harmonieux, de retrouver confiance en soi, de se préparer à un évènement, ou simplement pour se reconnecter à une une respiration paisible ; tout ça dans le but de pouvoir se ressourcer quand vous le souhaitez dans votre quotidien. Je suis là pour vous apporter différentes clefs vous permettant ensuite de les utiliser pour vous afin de vous retrouver sereinement.</p>
          </div>
        </div>
        <div className="column">
          <h2>Mes outils</h2>
          <div className="column-content">
            <p>Spécialisée dans la gestion du stress et de l'émotion, c'est avec une attention encore plus particulière que je vous aiderais à aller au delà de vos peurs afin de trouver cette sérénité qui est présente en vous et qui ne demande qu'à être mise en lumière.</p>
            <p>Spécialisée également en entreprise, mon objectif est de contribuer à l'épanouissement professionnel et personnel de votre équipe, en proposant des séances adaptées aux besoins de chacun. Ensemble, nous pouvons créer un environnement de travail plus serein et plus productif.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
