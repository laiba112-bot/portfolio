import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-about">
          <h2>MyPortfolio</h2>
          <p>
            Passionate Web Developer creating modern, responsive and clean
            websites.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aiman Maroof | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
