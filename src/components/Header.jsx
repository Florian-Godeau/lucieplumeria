import React, { useState } from 'react';
import { Navbar, Nav, Container, Collapse } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/lucieLogo.webp';

function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <Navbar className="header" expand="lg">
      <Container className="header__container">
        <Navbar.Brand as={Link} to="/" className="header__brand">
          <img src={logo} alt="Logo" className="header__logo" />
        </Navbar.Brand>
        <h1 className="header__title">
          <span>Lucie Plumeria</span>
          <span>Sophrologue à Voiron</span>
        </h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setOpen(!open)} aria-expanded={open} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Collapse in={open}>
            <div className="navbar-collapse">
              <Nav className="header__nav">
                <Nav.Link as={Link} to="/" className={`header__nav-link ${location.pathname === '/' ? 'header__nav-link--active' : ''}`}>Accueil</Nav.Link>
                <Nav.Link as={Link} to="/about" className={`header__nav-link ${location.pathname === '/about' ? 'header__nav-link--active' : ''}`}>Qui suis-je ?</Nav.Link>
                <Nav.Link as={Link} to="/price" className={`header__nav-link ${location.pathname === '/price' ? 'header__nav-link--active' : ''}`}>Prestations/Tarifs</Nav.Link>
                <Nav.Link as={Link} to="/contact" className={`header__nav-link ${location.pathname === '/contact' ? 'header__nav-link--active' : ''}`}>Contact</Nav.Link>
              </Nav>
            </div>
          </Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
