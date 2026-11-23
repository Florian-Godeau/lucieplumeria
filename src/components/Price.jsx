import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import seanceImage from '../assets/images/price.webp';
import individualImage from '../assets/images/sophrologie.webp';
import collectifImage from '../assets/images/massage.webp';
import qiNeiZangImage from '../assets/images/meditation.webp';
import fiveSeanceImg from '../assets/images/giftcard.webp';
import tenSeanceImg from '../assets/images/10seance.webp';

function Price() {
  const [selectedTab, setSelectedTab] = useState('sessions');
  const [showSophroInfo, setShowSophroInfo] = useState(false);
  const [showMassageInfo, setShowMassageInfo] = useState(false);
  const [showQiNeiZangInfo, setShowQiNeiZangInfo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Force re-render on tab change to apply animations
    const cards = document.querySelectorAll('.price__card');
    cards.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
    });
    setTimeout(() => {
      cards.forEach((card) => {
        card.style.opacity = '';
        card.style.transform = '';
      });
    }, 100);
  }, [selectedTab]);

  const handleContactClick = (reason) => {
    navigate(`/contact?reason=${encodeURIComponent(reason)}`);
  };

  const handleMassageContactClick = () => {
    handleContactClick("Demande d'information / réservation massage");
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleCloseSophroInfo = () => setShowSophroInfo(false);
  const handleShowSophroInfo = () => setShowSophroInfo(true);
  const handleCloseMassageInfo = () => setShowMassageInfo(false);
  const handleShowMassageInfo = () => setShowMassageInfo(true);

  const renderSessions = () => (
    <div className="price__cards-container">
      <div className="price__card" key="session1">
        <img src={individualImage} alt="Sophrologie" className="price__card-image" />
        <div className="price__card-text">
          <h2>Sophrologie</h2>
          <p>Séance 1h15/1h30</p>
          <p>70€</p>
          <p>Formule 5 séances : 300€ (première séance offerte, soit 6 séances à prix tout doux)</p>
          <button type="button" className="price__info-button" onClick={handleShowSophroInfo}>
            plus d'infos ici
          </button>
          <button onClick={() => handleContactClick("Demande d'information / réservation séance sophrologie")}>Réservation / Contact</button>
        </div>
      </div>
      {
      <div className="price__card" key="session2">
        <img src={collectifImage} alt="Massage" className="price__card-image" />
        <div className="price__card-text">
          <h2>Massage Bien-Être Intuitif</h2>
          <p>Massage 1h30 (minimum) aux huiles chaudes</p>
          <p>90€</p>
          <p>Formule 5 massages : 420€</p>
          <button type="button" className="price__info-button" onClick={handleShowMassageInfo}>
            plus d'infos ici
          </button>
          <button onClick={handleMassageContactClick}>Réservation / Contact</button>
        </div>
      </div>
      }
      {
      <div className="price__card price__card--single" key="session3">
        <img src={qiNeiZangImage} alt="" className="price__card-image" />
        <div className="price__card-text">
          <h2>Massage Qi Nei Zang</h2>
          <p>Massage du ventre/des émotions 1h30 (minimum)</p>
          <p>90€</p>
          <p>Formule 5 massages : 420€</p>
          <button type="button" className="price__info-button" onClick={() => setShowQiNeiZangInfo(true)}>
            plus d'infos ici
          </button>
          <button onClick={handleMassageContactClick}>Réservation / Contact</button>
        </div>
      </div>
      }
    </div>
  );

  const renderFormulas = () => (
    <div className="price__cards-container">
      <div className="price__card" key="formula1">
        <img src={fiveSeanceImg} alt="carte cadeau" className="price__card-image" />
        <div className="price__card-text">
          <h2>Carte cadeau</h2>
          <p>Pour vos proches, la carte cadeau est idéale. Cela lui permettra de choisir son propre moment cocooning qui lui correspond, et ce, dans n'importe quelles prestations que je propose.</p>
          <p>Vous choisissez la prestation et je vous envoie votre carte dématérialisée.</p>
          <button onClick={() => handleContactClick("Demande d'information / réservation carte cadeau")}>Réservation / Contact</button>
        </div>
      </div>
      {/*<div className="price__card" key="formula2">
        <img src={tenSeanceImg} alt="10 séances" className="price__card-image" />
        <div className="price__card-text">
          <h2>Forfait 10 séances</h2>
          <p>450€</p>
          <p>Forfait 10 séances avec la première offerte, soit 11 séances à prix tout doux</p>
          <p>Les séances peuvent se faire en présentiel au cabinet mais également en visio</p>
          <p>Valable 12 mois</p>
          <button onClick={() => handleContactClick("Demande d'information séance individuelle ou Formules")}>Réservation / Contact</button>
        </div>
      </div>*/}
    </div>
  );

  return (
    <>
      <div className="price">
        <Banner src={seanceImage} />
        <div className="price__tabs">
          <div
            className={`price__tab ${selectedTab === 'sessions' ? 'price__tab--active' : ''}`}
            onClick={() => handleTabClick('sessions')}
          >
            Séances
          </div>
          <div
            className={`price__tab ${selectedTab === 'formulas' ? 'price__tab--active' : ''}`}
            onClick={() => handleTabClick('formulas')}
          >
            Carte cadeau
          </div>
        </div>
        {selectedTab === 'sessions' ? renderSessions() : renderFormulas()}
      </div>

      <Modal show={showSophroInfo} onHide={handleCloseSophroInfo} dialogClassName="modal-dialog-scrollable">
        <Modal.Header closeButton>
          <Modal.Title>Séance Sophro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Lors d'une séance de sophrologie, nous venons travailler la respiration, premier atout primordial pour la détente.
            Avec cette respiration consciente, nous venons faire des petits exercices très légers combinés à des visualisations
            afin de ressentir parfaitement le relâchement du mental, l'apaisement et la douceur dont vous avez besoin.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSophroInfo}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showMassageInfo} onHide={handleCloseMassageInfo} dialogClassName="modal-dialog-scrollable">
        <Modal.Header closeButton>
          <Modal.Title>Massage Bien-Être Intuitif</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Je vous propose des massages intuitif.</p>
          <p>
            Ce massage est un moment entièrement intuitif, où je prends conscience de votre corps et
            me laisse guider pour ce qu'il y a de mieux pour vous.
            <br />
            Je vais chercher les tensions pour les
            dénouer, vous envelopper afin que vous puissiez vous relâcher et vous sentir dans un espace
            sécurisé.
            <br />
            Je prends véritablement le temps, en conscience.
            <br />
            Vous déconnecter de votre quotidien et vous aider à retrouver un apaisement total est ce qui m'importe.
            <br />
            Le massage dure autour d'1h30, il se peut que ça aille jusqu'à 1h45, selon le moment.
            <br />
            Le prix reste fixe.
            <br />
            Ici je masse le dos, les bras, les jambes, le ventre et la tête, sauf si contre-indication pour
            certaines zones.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseMassageInfo}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showQiNeiZangInfo} onHide={() => setShowQiNeiZangInfo(false)} dialogClassName="modal-dialog-scrollable">
        <Modal.Header closeButton>
          <Modal.Title>Massage Qi Nei Zang</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Le ventre est désigné dans la Medecine Traditionnelle Chinoise comme le deuxième cerveau de notre corps.
            <br />
            Il est le siège de nos émotions.
            <br />
            Dans ce massage, je vous propose de vous libérer de vos tensions accumulées, de retrouver une
            respiration ample et profonde, et une digestion plus légère.
            <br />
            Ce massage se caractérise sur 3 étapes :
          </p>
          <ul>
            <li>détoxifier</li>
            <li>renforcer les organes/entrailles et restructurer le corps</li>
            <li>libérer ses émotions</li>
          </ul>
          <p>C'est un massage qui se fait sous forme de cure, plusieurs massages sont necessaires pour voir des effets bénéfiques sur le long terme.</p>
          <p>
            Ici je masse les bras, le ventre, les pieds et la tête.
            <br />
            Sauf si contre-indication pour certaines zones.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowQiNeiZangInfo(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Price;
