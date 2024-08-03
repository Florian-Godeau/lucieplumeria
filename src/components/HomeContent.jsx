import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from './Banner';
import TitleContent from './TitleContent';
import sunflower from '../assets/images/sunflower.webp';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';

function CustomToggle({ children, eventKey }) {
  const [open, setOpen] = useState(false);
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    setOpen(!open);
  });

  return (
    <Card.Header onClick={decoratedOnClick} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
      {children}
      {open ? <ChevronUp /> : <ChevronDown />}
    </Card.Header>
  );
}

function HomeContent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-content">
      <Banner src={sunflower} />
      <TitleContent 
        title="Bienvenue" 
        subtitle="Vous vous demandez peut-être ce qu'est la sophrologie, en quoi consiste t-elle, et qu'apporte t-elle dans votre quotidien ?" 
      />
      <div className="home-content__three-columns">
        <div className="home-content__column" data-aos="flip-right" data-aos-offset="200">
          <h2>Petite histoire...</h2>
          <div className="home-content__column-content">
            <p>La sophrologie est une méthode de relaxation et de développement personnel fondée en 1960 par le neuropsychiatre Alfonso Caycedo. Originaire de Colombie, A. Caycedo a exercé en Espagne où il a développé cette technique en s'inspirant de diverses disciplines occidentales et orientales. Son objectif était de créer une méthode permettant d'améliorer la qualité de vie et le bien-être mental et physique des individus.</p>
            <p>La sophrologie combine des éléments de l'hypnose, du yoga, de la méditation, et de la psychologie positive. Le terme "sophrologie" vient du grec ancien, avec "sôs" signifiant "harmonie", "phren" signifiant "esprit", et "logos" signifiant "étude". Cela peut se traduire par "l'étude de l'harmonie de l'esprit".</p>
          </div>
        </div>
        <div className="home-content__column home-content__column--middle" data-aos="flip-right" data-aos-offset="200">
          <h2>Pour qui ? Pour quoi ?</h2>
          <div className="home-content__column-content">
            <p>Pour toute personne souhaitant mettre en lumière ses différents troubles et les appréhender au mieux : que soit la gestion du stress/des émotions, d'une phobie, de retrouver un sommeil harmonieux, de retrouver confiance en soi, de se préparer à un évènement, ou simplement pour se reconnecter à une une respiration paisible ; tout ça dans le but de pouvoir se ressourcer quand vous le souhaitez dans votre quotidien. Je suis là pour vous apporter différentes clefs vous permettant ensuite de les utiliser pour vous afin de vous retrouver sereinement.</p>
          </div>
        </div>
        <div className="home-content__column" data-aos="flip-right" data-aos-offset="200">
          <h2>Mes outils</h2>
          <div className="home-content__column-content">
            <p>Spécialisée dans la gestion du stress et de l'émotion, c'est avec une attention encore plus particulière que je vous aiderais à aller au delà de vos peurs afin de trouver cette sérénité qui est présente en vous et qui ne demande qu'à être mise en lumière.</p>
            <p>Spécialisée également en entreprise, mon objectif est de contribuer à l'épanouissement professionnel et personnel de votre équipe, en proposant des séances adaptées aux besoins de chacun. Ensemble, nous pouvons créer un environnement de travail plus serein et plus productif.</p>
          </div>
        </div>
      </div>

      <div className="home-content__accordions">
        <Accordion>
          <Card>
            <CustomToggle eventKey="0">Petite histoire...</CustomToggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>La sophrologie est une méthode de relaxation et de développement personnel fondée en 1960 par le neuropsychiatre Alfonso Caycedo. Originaire de Colombie, A. Caycedo a exercé en Espagne où il a développé cette technique en s'inspirant de diverses disciplines occidentales et orientales. Son objectif était de créer une méthode permettant d'améliorer la qualité de vie et le bien-être mental et physique des individus.</p>
                <p>La sophrologie combine des éléments de l'hypnose, du yoga, de la méditation, et de la psychologie positive. Le terme "sophrologie" vient du grec ancien, avec "sôs" signifiant "harmonie", "phren" signifiant "esprit", et "logos" signifiant "étude". Cela peut se traduire par "l'étude de l'harmonie de l'esprit".</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <CustomToggle eventKey="1">Pour qui ? Pour quoi ?</CustomToggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>Pour toute personne souhaitant mettre en lumière ses différents troubles et les appréhender au mieux : que soit la gestion du stress/des émotions, d'une phobie, de retrouver un sommeil harmonieux, de retrouver confiance en soi, de se préparer à un évènement, ou simplement pour se reconnecter à une une respiration paisible ; tout ça dans le but de pouvoir se ressourcer quand vous le souhaitez dans votre quotidien. Je suis là pour vous apporter différentes clefs vous permettant ensuite de les utiliser pour vous afin de vous retrouver sereinement.</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <CustomToggle eventKey="2">Mes outils</CustomToggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <p>Spécialisée dans la gestion du stress et de l'émotion, c'est avec une attention encore plus particulière que je vous aiderais à aller au delà de vos peurs afin de trouver cette sérénité qui est présente en vous et qui ne demande qu'à être mise en lumière.</p>
                <p>Spécialisée également en entreprise, mon objectif est de contribuer à l'épanouissement professionnel et personnel de votre équipe, en proposant des séances adaptées aux besoins de chacun. Ensemble, nous pouvons créer un environnement de travail plus serein et plus productif.</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default HomeContent;
