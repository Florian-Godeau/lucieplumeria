import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import HomeContent from '../components/HomeContent';
import About from '../components/About';
import Price from '../components/Price';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Helmet>
                <title>Accueil - Lucie Plumeria</title>
                <meta name="description" content="Bienvenue sur le site de Lucie Plumeria, sophrologue spécialisée dans la gestion du stress et des émotions. La sophrologie : une méthode douce alliant respiration, visualisation et équilibre pour harmoniser votre bien-être mental et physique." />
                <meta name="keywords" content="sophrologie, Lucie Plumeria, gestion du stress, bien-être, respiration, visualisation" />
                <meta property="og:title" content="Accueil - Lucie Plumeria" />
                <meta property="og:description" content="Bienvenue sur le site de Lucie Plumeria, sophrologue spécialisée dans la gestion du stress et des émotions." />
                <meta property="og:image" content="URL_de_votre_image" />
                <meta property="og:url" content="URL_de_votre_site" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Accueil - Lucie Plumeria" />
                <meta name="twitter:description" content="Bienvenue sur le site de Lucie Plumeria, sophrologue spécialisée dans la gestion du stress et des émotions." />
                <meta name="twitter:image" content="URL_de_votre_image" />
              </Helmet>
              <HomeContent />
            </>
          } 
        />
        <Route 
          path="/about" 
          element={
            <>
              <Helmet>
                <title>Qui suis-je ? - Lucie Plumeria</title>
                <meta name="description" content="Découvrez qui est Lucie Plumeria, sophrologue spécialisée dans la gestion du stress et des émotions. La sophrologie : une méthode douce alliant respiration, visualisation et équilibre pour harmoniser votre bien-être mental et physique." />
                <meta name="keywords" content="sophrologie, Lucie Plumeria, gestion du stress, bien-être, respiration, visualisation, Qui suis-je" />
                <meta property="og:title" content="Qui suis-je ? - Lucie Plumeria" />
                <meta property="og:description" content="Découvrez qui est Lucie Plumeria, sophrologue spécialisée dans la gestion du stress et des émotions." />
                <meta property="og:image" content="URL_de_votre_image" />
                <meta property="og:url" content="URL_de_votre_site/about" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Qui suis-je ? - Lucie Plumeria" />
                <meta name="twitter:description" content="Découvrez qui est Lucie Plumeria, sophrologue spécialisée dans la gestion du stress et des émotions." />
                <meta name="twitter:image" content="URL_de_votre_image" />
              </Helmet>
              <About />
            </>
          } 
        />
        <Route 
          path="/price" 
          element={
            <>
              <Helmet>
                <title>Tarifs - Lucie Plumeria</title>
                <meta name="description" content="Découvrez les tarifs des séances individuelles, collectives et en entreprise avec Lucie Plumeria, sophrologue spécialisée dans la gestion du stress et des émotions. La sophrologie : une méthode douce alliant respiration, visualisation et équilibre pour harmoniser votre bien-être mental et physique." />
                <meta name="keywords" content="sophrologie, tarifs, séances individuelles, séances collectives, entreprise, forfaits, Voiron, Tullins" />
                <meta property="og:title" content="Tarifs - Lucie Plumeria" />
                <meta property="og:description" content="Découvrez les tarifs des séances individuelles, collectives et en entreprise avec Lucie Plumeria, sophrologue spécialisée dans la gestion du stress et des émotions." />
                <meta property="og:image" content="URL_de_votre_image" />
                <meta property="og:url" content="URL_de_votre_site/price" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Tarifs - Lucie Plumeria" />
                <meta name="twitter:description" content="Découvrez les tarifs des séances individuelles, collectives et en entreprise avec Lucie Plumeria, sophrologue spécialisée dans la gestion du stress et des émotions." />
                <meta name="twitter:image" content="URL_de_votre_image" />
              </Helmet>
              <Price />
            </>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <>
              <Helmet>
                <title>Contact - Lucie Plumeria</title>
                <meta name="description" content="Contactez Lucie Plumeria pour toute demande d'information, réservation de séance individuelle, collective ou en entreprise. La sophrologie : une méthode douce alliant respiration, visualisation et équilibre pour harmoniser votre bien-être mental et physique." />
                <meta name="keywords" content="contact, sophrologie, Lucie Plumeria, gestion du stress, bien-être, Voiron, Tullins" />
                <meta property="og:title" content="Contact - Lucie Plumeria" />
                <meta property="og:description" content="Contactez Lucie Plumeria pour toute demande d'information, réservation de séance individuelle, collective ou en entreprise." />
                <meta property="og:image" content="URL_de_votre_image" />
                <meta property="og:url" content="URL_de_votre_site/contact" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact - Lucie Plumeria" />
                <meta name="twitter:description" content="Contactez Lucie Plumeria pour toute demande d'information, réservation de séance individuelle, collective ou en entreprise." />
                <meta name="twitter:image" content="URL_de_votre_image" />
              </Helmet>
              <Contact />
            </>
          } 
        />
      </Routes>
      <Footer />
    </>
  );
}

export default Home;