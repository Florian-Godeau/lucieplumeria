import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/lucieLogo.webp';
import instagramLogo from '../assets/images/instagram.png';
import linkedinLogo from '../assets/images/linkedin.png';
import youtube from '../assets/images/youtube.png';

function Header() {
  return (
    <Navbar className="navbar-opacity" expand="lg">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/about">Qui suis-je ?</Nav.Link>
            <Nav.Link as={Link} to="/price">Tarifs</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
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