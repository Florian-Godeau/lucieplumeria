import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Banner from './Banner';
import contactImage from '../assets/images/contact.webp';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div className="contact-content">
      <Banner src={contactImage} />
      <div className="text-container">
        <div className="text-content">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="contact-form-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="contact_reason">Pourquoi me contactez-vous?</label>
          <select name="contact_reason" id="contact_reason" required>
            <option value="Demande d'information">Demande d'information</option>
            <option value="Réservation séance individuelle / Formules">Réservation séance individuelle / Formules</option>
            <option value="Réservation séance collective">Réservation séance collective</option>
            <option value="Réservation / Demande séance en entreprise">Réservation / Demande séance en entreprise</option>
          </select>
          
          <label htmlFor="location">Lieu de RDV</label>
          <select name="location" id="location" required>
            <option value="Voiron">Voiron</option>
            <option value="Tullins">Tullins</option>
          </select>
          
          <label htmlFor="name">Nom</label>
          <input type="text" name="name" id="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />

          <label htmlFor="phone">Téléphone (facultatif)</label>
          <input type="tel" name="phone" id="phone" />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" required></textarea>

          <button type="submit">Envoyer</button>
        </form>
        <div className="contact-info">
          <p><strong>Téléphone :</strong> 07 57 87 65 34</p>
          <p><strong>Horaires d'ouverture :</strong> 8h/20h</p>
        </div>
      </div>
      <div className="locations">
        <div className="location">
          <h3>Voiron</h3>
          <p>12 rue Ferrer 38500 Voiron</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.2456796208395!2d5.585258215556004!3d45.36417297910008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478afe63274c41c5%3A0x2912b74ff45e1d1e!2s12%20Rue%20Ferrer%2C%2038500%20Voiron!5e0!3m2!1sfr!2sfr!4v1620314102903!5m2!1sfr!2sfr"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="location">
          <h3>Tullins</h3>
          <p>1 montée Pinet 38210 Tullins</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.2456796208395!2d5.585258215556004!3d45.36417297910008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b9a678cf9b64b%3A0x23d8e2f8d9e7b36!2s1%20Mont%C3%A9e%20Pinet%2C%2038210%20Tullins!5e0!3m2!1sfr!2sfr!4v1620314176882!5m2!1sfr!2sfr"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;