import React, { useEffect } from 'react';
import Banner from './Banner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImage from '../assets/images/aboutnew.webp';
import lucieImage from '../assets/images/lucie.webp';

function About() {
  useEffect(() => {
    const handleResize = () => {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach((element) => {
        if (window.innerWidth <= 768) {
          element.setAttribute('data-aos', 'about-fade-up');
        } else {
          element.setAttribute('data-aos', 'about-fade-up');
        }
      });
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="about">
      <Banner src={aboutImage} />
      <div className="about__card" data-aos="about-fade-up">
        <div className="about__card-content">
          <img src={lucieImage} alt="Lucie Plumeria" className="about__card-image" />
          <div className="about__card-text">
            <h2 className="about__card-title">Qui suis-je ?</h2>
            <p>Je n'ai jamais réellement eu un parcours typique avec un seul métier en CDI durant des années. J'ai toujours aimé faire ce qu'il me semblait bien pour moi, dans l'instant T.</p>
            <p>J'ai entre autre été comédienne, en passant par ambulancière. Des métiers qui ont énormément de sens à mes yeux : pouvoir être au contact de l'autre. Comédienne dans des comédies de café théâtre, j'ai adoré pouvoir faire rire, adoré que les spectateurs passent un bon moment en oubliant leur tracas du quotidien.</p>
            <p>Ambulancière, merveilleux métier qui m'a permis d'être au plus proche de ceux qui ont besoin, de les soutenir, de les écouter, d'être une petite échappatoire dans ce qui leur arrive.</p>
            <p>Après ces beaux métiers, un incendie m'ôtant toute ma vie matérielle m'a permis de faire table rase et de reprendre totalement à zéro. Une véritable renaissance m'a été offerte.</p>
            <p>Ainsi, tout mon parcours m'a amené à ce que je suis maintenant : thérapeute, là pour vous aider à retrouver qui vous êtes.</p>
            <p>J'ai toujours eu à cœur d'aider les autres, mais ma devise fondamentale, c'est qu'il faut d'abord passer par soi avant de pouvoir aider quiconque.</p>
            <p>De par mon histoire, j'ai acquis une connaissance approfondie de moi même, de qui je suis, de qui nous sommes, permettant ainsi de vous transmettre ces clefs.</p>
            <p>Nous sommes des Êtres de Lumière, nous sommes là pour être, et c'est à ça que je veux vous ramener, Être vous. Pas faire, pas mentaliser, pas se torturer les méninges, juste être.</p>
            <p>L'individu s'oublie, s'égare dans ses croyances limitantes, se freine, il est temps que cela s'arrête et que tu te retrouves, toi, dans ta lumière, que tu retrouves ta joie et ton petit enfant intérieur qui attend que tu lui laisse la place.</p>
            <p>Nous sommes des Êtres pour créer, pas pour subir.</p>
            <p>Alors tu viens, on va voir ta lumière ?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
