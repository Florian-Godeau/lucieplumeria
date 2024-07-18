import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "../components/Header";
import HomeContent from '../components/HomeContent';
import About from '../components/About';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Home;