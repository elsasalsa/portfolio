import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Menu, MenuItem } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import About from './About';
import Project from './Project';
import Certificate from './Certificate';
import Contact from './Contact';
import './css/home.css';

function Home() {
  const navigate = useNavigate();
  const [navbarBg, setNavbarBg] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


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
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ marginBottom: '100px' }}>
        <div className="hero-section">
          <div className="hero-text">
            <h6 className="side-line">Welcome to my portfolio</h6>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I am Elsa!
            </motion.h1>
            <h3>Frontend Developer</h3>

            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button
                variant="outlined"
                endIcon={<KeyboardDoubleArrowDownIcon />}
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
                Explore My Journey
              </Button>
            </Link>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  backgroundColor: '#1e1e2f',
                  color: '#ffffff',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  mt: 1,
                },
              }}
            >
              <MenuItem
                onClick={handleClose}
                component="a"
                href="/Elsa Salsa Bila - CV.pdf"
                download
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(102, 217, 232, 0.1)',
                    color: '#66d9e8',
                  },
                }}
              >
                CV
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component="a"
                href="/Elsa Salsa Bila - Portofolio.pdf"
                download
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(102, 217, 232, 0.1)',
                    color: '#66d9e8',
                  },
                }}
              >
                Portfolio
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component="a"
                href="/Elsa Salsa Bila - SRK.pdf"
                download
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(102, 217, 232, 0.1)',
                    color: '#66d9e8',
                  },
                }}
              >
                Reference Letter
              </MenuItem>
            </Menu>
          </div>

          <Box
            className="hero-image"
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <img src="/img/el.png" alt="Elsa" />
          </Box>
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
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
