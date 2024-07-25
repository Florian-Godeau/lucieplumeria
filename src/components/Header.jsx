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
    <Navbar className="navbar-opacity" expand="lg">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center nav-link">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'nav-link custom-nav-link active-link' : 'nav-link custom-nav-link'}>Accueil</Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'nav-link custom-nav-link active-link' : 'nav-link custom-nav-link'}>Qui suis-je ?</Nav.Link>
            <Nav.Link as={Link} to="/price" className={location.pathname === '/price' ? 'nav-link custom-nav-link active-link' : 'nav-link custom-nav-link'}>Tarifs</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'nav-link custom-nav-link active-link' : 'nav-link custom-nav-link'}>Contact</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link href="https://www.instagram.com/lucieplumeria/" target="_blank" className="d-flex align-items-center logo-nav">
              <img src={instagramLogo} alt="Instagram" className="instagram-logo" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/lucie-plumeria/" target="_blank" className="d-flex align-items-center logo-nav">
              <img src={linkedinLogo} alt="LinkedIn" className="linkedIn-logo" />
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com/@LuciePlumeria" target="_blank" className="d-flex align-items-center logo-nav">
              <img src={youtube} alt="Youtube" className="youtube-logo" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;