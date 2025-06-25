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
            <div className="social-item"><FaWhatsapp className="icon" /><span>+62 858-1781-5589</span></div>
            <div className="social-item"><FaLinkedin className="icon" /><span>elsa-salsa</span></div>
            <div className="social-item"><FaEnvelope className="icon" /><span>elsasalsabilla73@gmail.com</span></div>
            <div className="social-item"><FaGithub className="icon" /><span>elsasalsa</span></div>
            <div className="social-item"><FaInstagram className="icon" /><span>@ellsasv_</span></div>
            <div className="social-item"><FaMapMarkerAlt className="icon" /><span>Bogor, Jawa Barat</span></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
