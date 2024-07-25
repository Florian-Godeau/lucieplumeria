import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './page/Home';

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: false,
  mirror: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);