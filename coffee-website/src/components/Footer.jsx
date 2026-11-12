import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section pt-5 pb-3" id="contact">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h4 className="footer-brand mb-3">
              <i className="bi bi-cup-hot-fill me-2"></i>Brew & Bean
            </h4>
            <p className="footer-text">
              Bringing you the freshest coffee and warm moments every single day. Visit our cafe or order online anytime!
            </p>
            <div className="d-flex gap-3 social-icons mt-3 ">
              <a href="#facebook"><i className="bi bi-facebook"></i></a>
              <a href="#instagram"><i className="bi bi-instagram"></i></a>
              <a href="#twitter"><i className="bi bi-twitter"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-3">Opening Hours</h5>
            <ul className="list-unstyled footer-text">
              <li>Mon - Fri: 7:00 AM - 9:00 PM</li>
              <li>Saturday: 8:00 AM - 10:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-3">Contact Us</h5>
            <p className="footer-text mb-1"><i className="bi bi-geo-alt me-2"></i>123 Coffee Street, City</p>
            <p className="footer-text mb-1"><i className="bi bi-envelope me-2"></i>coffee@456gmail.com</p>
            <p className="footer-text"><i className="bi bi-telephone me-2"></i>+123 456 7890</p>
          </div>
        </div>

        <hr className="my-4 footer-hr" />
        <div className="text-center footer-text">
          <small>&copy; {new Date().getFullYear()} Brew & Bean. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;