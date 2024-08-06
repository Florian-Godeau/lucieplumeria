import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Home;
