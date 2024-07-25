import React, { useEffect } from 'react';
import Banner from './Banner';
import TitleContent from './TitleContent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImage from '../assets/images/about.webp';
import lucieImage from '../assets/images/lucie.webp';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about">
      <Banner src={aboutImage} />
      <TitleContent 
        title="Qui suis-je ?" 
        subtitle=""
      />
      <div className="about__card" data-aos="flip-up">
        <img src={lucieImage} alt="Lucie Plumeria" className="about__card-image" />
        <div className="about__card-text">
          <p>
            À cœur de comprendre la complexité de l'être humain et de favoriser son bien-être, j'ai emprunté un chemin de découverte et de transformation personnelle. Se connaître pleinement et atteindre une paix intérieure sont les raisons profondes qui m'ont poussée à m'engager dans un véritable voyage intérieur, enrichi par diverses pratiques et disciplines. Convaincue que le travail sur soi est indispensable pour aider les autres, je me suis dotée de cette devise fondamentale : c'est en explorant et en harmonisant notre propre être que nous pouvons véritablement soutenir ceux qui nous entourent.
          </p>
          <p>
            Aujourd'hui, je suis comblée de posséder un éventail d'outils diversifiés qui me permettent d'offrir une aide précieuse et quotidienne à chacun. Mon objectif ultime est de semer la sérénité et la paix, afin que vous puissiez vous épanouir pleinement et retrouver une confiance inébranlable en vous-même. Dotée d'une curiosité insatiable et d'une empathie naturelle, je m'engage à être une oreille attentive et bienveillante, prête à illuminer les zones d'ombre de votre être et à révéler la lumière intérieure qui ne demande qu'à briller.
          </p>
          <p>
            Il me tient à cœur de vous guider vers une connexion authentique avec votre essence véritable, vous permettant ainsi de rayonner dans la vie que vous méritez pleinement. Je serais honorée de vous accompagner sur ce chemin de découverte de soi, vous aidant à accéder à cette paix intérieure et à cette harmonie qui transformeront votre quotidien. Ensemble, nous ouvrirons la porte à une vie riche de sens et de plénitude, où votre véritable potentiel pourra s'épanouir et s'exprimer librement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
