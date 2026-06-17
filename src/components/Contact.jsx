import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Banner from './Banner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contactImage from '../assets/images/contactnew.webp';
import phoneIcon from '../assets/images/phone.png';
import mailIcon from '../assets/images/mail.png';
import calendarIcon from '../assets/images/calendrier.png';

function Contact() {
  const form = useRef();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach((element) => {
        if (window.innerWidth <= 1024) {
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
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const reason = params.get('reason');
    if (reason) {
      form.current.contact_reason.value = reason;
    }
  }, [location.search]);

  const sendEmail = (e) => {
    e.preventDefault();

    // Obtenir le token reCAPTCHA v3 et l'ajouter au formulaire
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute('6LetP18qAAAAAKLGyma_THmaa4dFklhH4NAbrNHH', { action: 'submit' }).then((token) => {
        // Ajouter le token reCAPTCHA dans le champ cachÃ© du formulaire
        form.current['g-recaptcha-response'].value = token;

        // Envoyer l'email via emailjs
        emailjs.sendForm('service_o3squg8', 'template_23hr157', form.current, 'ZH2hDI6_HGQa2DYu3')
          .then((result) => {
              console.log(result.text);
              alert('Votre message à bien été envoyé !');
          }, (error) => {
              console.log(error.text);
              alert('Erreur, veuillez réessayer ultérieurement.');
          });

        e.target.reset();
      });
    });
  };

  return (
    <div className="contact">
      <Banner src={contactImage} />
      <div className="contact__card" data-aos="about-fade-up">
        <h2 className="contact__card-title">Contact</h2>
        <div className="contact__info">
          <div className="contact__info-item">
            <img src={phoneIcon} alt="Phone" className="contact__icon" />
            <p>07 57 87 65 34</p>
          </div>
          <div className="contact__info-item">
            <img src={mailIcon} alt="Mail" className="contact__icon" />
            <p>lucieplumeria@gmail.com</p>
          </div>
          <div className="contact__info-item">
            <a href="https://appt.link/meet-with-lucie-plumeria-zQVQNSoI" target="_blank" rel="noopener noreferrer">
              <button className="contact__appointment-button">
                <img src={calendarIcon} alt="Calendrier" className="contact__icon--button" />
                Prendre rendez-vous en ligne
              </button>
            </a>
          </div>
        </div>
        <div className="contact__locations">
          <div className="contact__locations__location">
            <h3>Voiron</h3>
            <p>681B route de Champ Chabert<br />38500 La Buisse</p>
            <iframe
              title='Voiron'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.8476484738926!2d5.580779115555755!3d45.32773407910232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478afdab9c8c8c8d%3A0x123!2s681B%20Route%20de%20Champ%20Chabert%2C%2038500%20La%20Buisse!5e0!3m2!1sfr!2sfr!4v1620314102903!5m2!1sfr!2sfr"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <select name="contact_reason" id="contact_reason" required>
            <option value="">Pourquoi me contactez-vous?</option>
            <option value="Demande d'information générale">Demande d'information générale</option>
            <option value="Demande d'information / réservation séance sophrologie">Demande d'information / réservation séance sophrologie</option>
            <option value="Demande d'information / réservation massage">Demande d'information / réservation massage</option>
            <option value="Demande d'information / réservation carte cadeau">Demande d'information / réservation carte cadeau</option>
          </select>
          
          <input type="text" name="name" id="name" maxlength="100" placeholder="Nom" required />
          <input type="email" name="email" id="email" maxlength="100" placeholder="Email" required />
          <input type="tel" name="phone" id="phone" placeholder="Téléphone (facultatif)" />

          <textarea name="message" id="message" rows="5" maxlength="500" placeholder="Message" required></textarea>

          {/* Champ cachÃ© pour le token reCAPTCHA v3 */}
          <input type="hidden" name="g-recaptcha-response" />

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
