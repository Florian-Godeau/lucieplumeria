import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/lucieLogo.webp';
import instagramLogo from '../assets/images/instagram.png';
import linkedinLogo from '../assets/images/linkedin.png';
import youtube from '../assets/images/youtube.png';

function Header() {
  const location = useLocation();

  return (
    <Navbar className="header" expand="lg">
      <Container className="header__container">
        <Navbar.Brand as={Link} to="/" className="header__brand">
          <img src={logo} alt="Logo" className="header__logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="header__nav">
            <Nav.Link as={Link} to="/" className={`header__nav-link ${location.pathname === '/' ? 'header__nav-link--active' : ''}`}>Accueil</Nav.Link>
            <Nav.Link as={Link} to="/about" className={`header__nav-link ${location.pathname === '/about' ? 'header__nav-link--active' : ''}`}>Qui suis-je ?</Nav.Link>
            <Nav.Link as={Link} to="/price" className={`header__nav-link ${location.pathname === '/price' ? 'header__nav-link--active' : ''}`}>Tarifs</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={`header__nav-link ${location.pathname === '/contact' ? 'header__nav-link--active' : ''}`}>Contact</Nav.Link>
          </Nav>
          <Nav className="header__social">
            <Nav.Link href="https://www.instagram.com/lucieplumeria/" target="_blank" className="header__social-link">
              <img src={instagramLogo} alt="Instagram" className="header__social-logo" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/lucie-plumeria/" target="_blank" className="header__social-link">
              <img src={linkedinLogo} alt="LinkedIn" className="header__social-logo" />
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com/@LuciePlumeria" target="_blank" className="header__social-link">
              <img src={youtube} alt="Youtube" className="header__social-logo" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
