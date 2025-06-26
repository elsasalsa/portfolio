import React from 'react';
import './css/contact.css';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p>© 2025 Elsa. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <div className="social-list">
            <div className="social-item">
              <a href="https://wa.me/6285817815589" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="icon" /> <span>+62 858-1781-5589</span>
              </a>
            </div>
            <div className="social-item">
              <a href="https://www.linkedin.com/in/elsa-salsa" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" /> <span>elsa-salsa</span>
              </a>
            </div>
            <div className="social-item">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=elsasalsabilla73@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="icon" /> <span>elsasalsabilla73@gmail.com</span>
              </a>
            </div>
            <div className="social-item">
              <a href="https://github.com/elsasalsa" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" /> <span>elsasalsa</span>
              </a>
            </div>
            <div className="social-item">
              <a href="https://www.instagram.com/ellsasv_" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" /> <span>@ellsasv_</span>
              </a>
            </div>
            <div className="social-item">
              <a href="https://www.google.com/maps/place/Gadog,+Bogor,+Jawa+Barat" target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt className="icon" /> <span>Bogor, Jawa Barat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
