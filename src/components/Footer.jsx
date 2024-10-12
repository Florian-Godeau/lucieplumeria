import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Footer() {
  const [showCGV, setShowCGV] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showLegalNotice, setShowLegalNotice] = useState(false);

  const handleCloseCGV = () => setShowCGV(false);
  const handleShowCGV = () => setShowCGV(true);

  const handleClosePrivacyPolicy = () => setShowPrivacyPolicy(false);
  const handleShowPrivacyPolicy = () => setShowPrivacyPolicy(true);

  const handleCloseLegalNotice = () => setShowLegalNotice(false);
  const handleShowLegalNotice = () => setShowLegalNotice(true);

  // Listener to open privacy policy from cookie banner or other components
  useEffect(() => {
    const openPrivacyPolicyModal = () => {
      handleShowPrivacyPolicy();
    };

    // Adding global event listener
    window.addEventListener('showPrivacyPolicy', openPrivacyPolicyModal);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('showPrivacyPolicy', openPrivacyPolicyModal);
    };
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <span className="footer-link" onClick={handleShowCGV}>
            Conditions générales de ventes
          </span>
          <span className="footer-link" onClick={handleShowPrivacyPolicy}>
            Politique de confidentialité
          </span>
          <span className="footer-link" onClick={handleShowLegalNotice}>
            Mentions légales
          </span>
          <p>Siret: 92979581300013</p>
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

      {/* Modal Conditions Générales de Vente */}
      <Modal show={showCGV} onHide={handleCloseCGV} dialogClassName="modal-dialog-scrollable">
        <Modal.Header closeButton>
          <Modal.Title>Conditions générales de ventes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>1. Objet</strong></p>
          <p>Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre la sophrologue Lucie Plumeria (ci-après désignée "le Prestataire") et toute personne physique ou morale (ci-après désignée "le Client") souhaitant bénéficier des services de sophrologie proposés par le Prestataire.</p>
          <p><strong>2. Prestations de Services</strong></p>
          <p>Le Prestataire propose des séances de sophrologie individuelles et/ou collectives, en cabinet ou en ligne. Les détails des prestations (durée, contenu, modalités) sont précisés sur le site internet du Prestataire ou communiqués directement au Client.</p>
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
          <Button variant="secondary" onClick={handleCloseCGV}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Politique de Confidentialité */}
      <Modal show={showPrivacyPolicy} onHide={handleClosePrivacyPolicy} dialogClassName="modal-dialog-scrollable">
        <Modal.Header closeButton>
          <Modal.Title>Politique de confidentialité</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Introduction</strong></p>
          <p>Bienvenue sur le site de Lucie Plumeria (www.lucieplumeria.com). Nous respectons votre vie privée et nous nous engageons à protéger les données personnelles que vous partagez avec nous. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.</p>
          <p><strong>1. Collecte des informations personnelles</strong></p>
          <p>Nous collectons certaines informations personnelles lorsque vous interagissez avec notre site, notamment :</p>
          <ul>
            <li>Votre nom</li>
            <li>Votre adresse e-mail</li>
            <li>Votre numéro de téléphone</li>
            <li>Toute autre information que vous nous fournissez directement via les formulaires de contact ou d'inscription.</li>
          </ul>
          <p><strong>2. Utilisation des informations collectées</strong></p>
          <ul>
            <li>Répondre à vos demandes et messages</li>
            <li>Vous fournir des informations sur nos services de sophrologie</li>
            <li>Gérer vos rendez-vous</li>
            <li>Envoyer des newsletters ou des informations relatives à nos services (si vous y avez consenti)</li>
            <li>Améliorer notre site web et nos services</li>
          </ul>
          <p><strong>3. Partage de vos données personnelles</strong></p>
          <p>Nous ne vendons, n'échangeons, ni ne louons vos informations personnelles à des tiers. Vos données personnelles peuvent toutefois être partagées avec :</p>
          <ul>
            <li>Des prestataires de services tiers qui nous aident à gérer notre site (hébergement, services de messagerie) et qui sont contractuellement tenus de respecter la confidentialité de vos informations.</li>
            <li>Des autorités légales si la loi nous y oblige.</li>
          </ul>
          <p><strong>4. Sécurité des données</strong></p>
          <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos informations personnelles contre toute perte, accès non autorisé, divulgation ou modification.</p>
          <p><strong>5. Vos droits</strong></p>
          <p>Vous disposez des droits suivants concernant vos informations personnelles :</p>
          <ul>
            <li>Droit d’accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit de limitation du traitement</li>
            <li>Droit d’opposition</li>
          </ul>
          <p><strong>6. Cookies</strong></p>
          <p>Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser les statistiques de visite.</p>
          <p><strong>7. Modifications de la politique de confidentialité</strong></p>
          <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.</p>
          <p><strong>8. Contact</strong></p>
          <p>Pour toute question concernant cette politique de confidentialité, contactez Lucie Plumeria à l'adresse lucieplumeria@gmail.com</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePrivacyPolicy}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Mentions Légales */}
      <Modal show={showLegalNotice} onHide={handleCloseLegalNotice} dialogClassName="modal-dialog-scrollable">
        <Modal.Header closeButton>
          <Modal.Title>Mentions légales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p><strong>Mentions Légales</strong></p>
          <p>Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique (LCEN), les présentes mentions légales sont portées à la connaissance des utilisateurs du site Lucie Plumeria (ci-après "le Site").</p>

          <p><strong>1. Informations sur l'éditeur du site</strong></p>
          <p>Le présent site est édité par :</p>
          <p>Plumeria Lucie, cabinet La Bulle à Soie<br />
            12 rue Ferrer 38500 Voiron<br />
            07.57.87.65.34<br />
            lucieplumeria@gmail.com<br />
            Siret : 92979581300013<br />
            Statut professionnel : Sophrologue diplômée de Formaquietude, Grenoble<br />
            Titre professionnel : Sophrologue, reconnu au RNCP</p>

          <p><strong>2. Hébergement du site</strong></p>
          <p>Le site est hébergé par :</p>
          <p>Hostinger<br />www.hostinger.fr</p>

          <p><strong>3. Propriété intellectuelle</strong></p>
          <p>L’ensemble des contenus présents sur le Site (textes, images, graphismes, logos, vidéos, etc.) est la propriété exclusive de Lucie Plumeria et de ses partenaires. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces éléments, même partielle, est strictement interdite sans l’accord préalable écrit de Lucie Plumeria.</p>
          <p>Toute utilisation non autorisée de ces contenus est constitutive d’une contrefaçon et engage la responsabilité de l’utilisateur au sens des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.</p>

          <p><strong>4. Limitation de responsabilité</strong></p>
          <p>Le contenu du Site est fourni à titre informatif. Lucie Plumeria met tout en œuvre pour assurer l'exactitude des informations diffusées, mais ne saurait être tenue responsable des omissions, inexactitudes, et des éventuelles mises à jour nécessaires. L’utilisateur est le seul responsable de l'utilisation des informations et contenus disponibles sur le Site.</p>
          <p>Le site peut contenir des liens hypertextes vers d'autres sites web gérés par des tiers. Lucie Plumeria n'exerce aucun contrôle sur ces sites et ne saurait être tenue responsable de leur contenu ou de l'utilisation qui pourrait en être faite.</p>

          <p><strong>5. Collecte de données personnelles</strong></p>
          <p>Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d'accès, de rectification, de suppression, et de portabilité des données vous concernant, ainsi que du droit de vous opposer ou de limiter leur traitement.</p>
          <p>Pour exercer ces droits, veuillez contacter :</p>
          <p>Lucie Plumeria<br />lucieplumeria@gmail.com</p>
          <p>Pour plus de détails concernant la gestion de vos données personnelles, veuillez consulter notre <span className="footer-link" style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleShowPrivacyPolicy}>Politique de confidentialité</span>.</p>

          <p><strong>6. Cookies</strong></p>
          <p>Le site utilise des cookies pour améliorer l’expérience utilisateur et proposer des services adaptés. Pour en savoir plus sur l’utilisation des cookies et les options de gestion, veuillez consulter notre <span className="footer-link" style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleShowPrivacyPolicy}>Politique de confidentialité</span>.</p>

          <p><strong>7. Droit applicable et juridiction compétente</strong></p>
          <p>Les présentes mentions légales sont régies par le droit français. En cas de litige relatif à l'utilisation du Site, et à défaut de résolution amiable, les tribunaux compétents seront ceux du ressort du siège social de Lucie Plumeria, sauf disposition légale impérative contraire.</p>

          <p><strong>8. Contact</strong></p>
          <p>Pour toute question ou réclamation concernant le site, vous pouvez contacter Lucie Plumeria via les moyens suivants :</p>
          <ul>
            <li>Téléphone : 07.57.87.65.34</li>
            <li>Adresse e-mail : lucieplumeria@gmail.com</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLegalNotice}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Footer;
