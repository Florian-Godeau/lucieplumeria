import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/lucieLogo.webp';
import instagramLogo from '../assets/images/instaLogo.webp';

function Header() {
    return (
      <Navbar className="navbar-opacity" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex align-items-center">
              <Nav.Link href="#home">Accueil</Nav.Link>
              <Nav.Link href="#who">Qui suis-je ?</Nav.Link>
              <Nav.Link href="#prices">Tarifs</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="https://www.instagram.com/lucieplumeria/" target="_blank" className="d-flex align-items-center">
                <img src={instagramLogo} alt="Instagram" className="instagram-logo" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default Header;