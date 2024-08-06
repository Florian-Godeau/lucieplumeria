import React, { useEffect } from 'react';
import Banner from './Banner';
import TitleContent from './TitleContent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImage from '../assets/images/about.webp';
import lucieImage from '../assets/images/lucie.webp';

function About() {
  useEffect(() => {
    const handleResize = () => {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach((element) => {
        if (window.innerWidth <= 768) {
          element.setAttribute('data-aos', 'flip-right');
        } else {
          element.setAttribute('data-aos', 'flip-up');
        }
      });
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially to set the correct animation

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            Depuis toujours, j'ai nourri un profond désir de comprendre l'être humain, tant de l'intérieur que de l'extérieur. Mon parcours a commencé par plusieurs années de théâtre, une discipline qui m'a permis d'explorer mes propres émotions en profondeur. En jouant, en comprenant et en exprimant ces émotions, j'ai pu incarner des personnages avec authenticité, découvrant ainsi la vérité de chaque rôle que j'endossais sur scène.
          </p>
          <p>
            Ensuite, j'ai dirigé mon attention vers l'extérieur en devenant ambulancière. Ce rôle m'a offert une perspective précieuse sur le corps humain, ses signaux et les manifestations de la maladie. J'ai appris à écouter les signes du corps et à répondre aux besoins immédiats des patients, cherchant toujours à leur apporter un soulagement maximal.
          </p>
          <p>
            Ces expériences ont éveillé en moi le désir profond d'aider les autres à découvrir leur lumière intérieure et à exploiter leur potentiel infini. J'ai donc entrepris un véritable chemin de développement personnel, enrichi par diverses pratiques et disciplines. Convaincue que le travail sur soi est essentiel pour pouvoir aider autrui, j'ai adopté la devise suivante : en explorant et en harmonisant notre propre être, nous sommes véritablement capables de soutenir ceux qui nous entourent.
          </p>
          <p>
            Aujourd'hui, je suis heureuse de pouvoir offrir une aide précieuse et quotidienne grâce à un éventail d'outils diversifiés. Mon objectif ultime est de vous voir rayonner librement, afin que chacun puisse s'épanouir et retrouver une confiance inébranlable en soi. Dotée d'une curiosité insatiable et d'une empathie naturelle, je m'engage à être une oreille attentive et bienveillante. Mon ambition est d'illuminer les zones d'ombre de votre être et de révéler votre lumière intérieure qui ne demande qu'à briller.
          </p>
          <p>
            Il me tient à cœur de vous guider vers une connexion authentique avec votre essence véritable, vous permettant de rayonner dans la vie que vous méritez pleinement. Je serais honorée de vous accompagner sur ce chemin de découverte de soi, vous aidant à accéder à cette paix intérieure et à cette harmonie qui transformeront votre quotidien.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
