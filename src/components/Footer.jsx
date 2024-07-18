// src/components/Footer.jsx
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Footer() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <footer className="footer">
          <div className="footer-content">
            <span className="footer-link" onClick={handleShow}>
              Conditions générales de ventes
            </span>
            <p>
              © 2024 - Site développé par{' '}
              <a
                href="https://portfolio-florian-godeau.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Florian Godeau
              </a>
            </p>
          </div>
        </footer>
  
        <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog-scrollable">
          <Modal.Header closeButton>
            <Modal.Title>Conditions générales de ventes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>1. Objet</strong></p>
            <p>Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre la sophrologue Lucie Plumeria (ci-après désignée "le Prestataire") et toute personne physique ou morale (ci-après désignée "le Client") souhaitant bénéficier des services de sophrologie proposés par le Prestataire.</p>
            <p><strong>2. Prestations de Services</strong></p>
            <p>Le Prestataire propose des séances de sophrologie individuelles et/ou collectives, en cabinet, à domicile ou en ligne. Les détails des prestations (durée, contenu, modalités) sont précisés sur le site internet du Prestataire ou communiqués directement au Client.</p>
            <p><strong>3. Tarifs</strong></p>
            <p>Les tarifs des prestations sont affichés sur le site internet du Prestataire et peuvent être révisés à tout moment. Les tarifs en vigueur au moment de la réservation s'appliquent. Les tarifs sont exprimés en euros (€) et ne sont pas soumis à la TVA.</p>
            <p><strong>4. Prise de Rendez-vous et Paiement</strong></p>
            <p>La prise de rendez-vous peut se faire par téléphone, par email ou via le site internet du Prestataire. Le paiement des prestations s'effectue au comptant, par chèque, espèces, virement bancaire ou carte bancaire, selon les modalités définies par le Prestataire.</p>
            <p><strong>5. Annulation et Report de Rendez-vous</strong></p>
            <p>Toute annulation ou report de rendez-vous doit être notifié au moins 24 heures à l'avance. En cas de non-respect de ce délai, le Prestataire se réserve le droit de facturer la séance annulée. En cas d'annulation par le Prestataire, une nouvelle date sera proposée au Client dans les plus brefs délais.</p>
            <p><strong>6. Déroulement des Séances</strong></p>
            <p>Le Client s'engage à se présenter à l'heure convenue pour les séances. Tout retard du Client ne pourra être imputé au Prestataire et la séance se terminera à l'heure initialement prévue. Le Prestataire s'engage à respecter les horaires et à fournir une prestation conforme aux attentes du Client.</p>
            <p><strong>7. Responsabilité</strong></p>
            <p>Le Prestataire est tenu à une obligation de moyens et non de résultats. Le Client reconnaît que la sophrologie ne se substitue en aucun cas à un traitement médical. Le Prestataire ne pourra être tenu responsable des décisions prises par le Client suite aux séances de sophrologie.</p>
            <p><strong>8. Confidentialité</strong></p>
            <p>Le Prestataire s'engage à respecter la confidentialité des informations échangées avec le Client dans le cadre des séances de sophrologie. Aucune information personnelle ne sera divulguée à des tiers sans l'accord préalable du Client, sauf obligation légale.</p>
            <p><strong>9. Protection des Données Personnelles</strong></p>
            <p>Le Prestataire collecte et traite les données personnelles du Client dans le respect de la réglementation en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD). Le Client dispose d'un droit d'accès, de rectification et de suppression de ses données personnelles en contactant le Prestataire.</p>
            <p><strong>10. Litiges et Droit Applicable</strong></p>
            <p>Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant de saisir les tribunaux compétents. À défaut d'accord amiable, le litige sera porté devant les juridictions françaises compétentes.</p>
            <p><strong>11. Acceptation des CGV</strong></p>
            <p>Le Client reconnaît avoir pris connaissance des présentes CGV et les accepte sans réserve. Toute réservation de prestation implique l'adhésion pleine et entière du Client aux présentes CGV.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Footer;
