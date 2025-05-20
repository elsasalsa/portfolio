import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import Button from '@mui/material/Button';
import About from './About';
import Project from './Project';
import Certificate from './Certificate';
import './css/home.css';

function Home() {
  const navigate = useNavigate();
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar
        expand="lg"
        variant="dark"
        fixed="top"
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',              
          backgroundColor: navbarBg ? 'rgba(36, 36, 62, 0.7)' : 'transparent', 
          transition: 'background-color 0.3s ease',
          backdropFilter: navbarBg ? 'blur(6px)' : 'none',
          boxShadow: navbarBg ? '0 2px 10px rgba(0,0,0,0.2)' : 'none', 
        }}
      >
        <Container>
          <Navbar.Brand href="/">MyPortfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="custom-nav">
              <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
                About
              </Link>
              <Link to="project" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
                Project
              </Link>
              <Link to="certificate" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
                Certificate
              </Link>
              {/* <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
                Contact
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ marginBottom: '100px' }}>
        <div className="hero-section">
          <h6 className="side-line">Welcome to my portfolio</h6>
          <h1>Hi I am Elsa!</h1>
          <h3>Frontend Developer</h3>

          <Button
            onClick={() => navigate('/about')}
            variant="outlined"
            sx={{
              color: '#66d9e8',
              borderColor: '#66d9e8',
              fontSize: '0.85rem',
              paddingY: '8px',
              paddingX: '16px',
              borderRadius: '50px',
              minWidth: 'auto',
              width: 'fit-content',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'rgba(102, 217, 232, 0.1)',
                borderColor: '#66d9e8',
              },
            }}
          >
            More About Me
          </Button>
        </div>
      </div>

      <div id="about">
        <About />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="certificate">
        <Certificate />
      </div>
    </div>
  );
}

export default Home;
