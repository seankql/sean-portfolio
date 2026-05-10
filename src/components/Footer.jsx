import LinkedinIcon from "../assets/linkedin-icon.svg?react";
import GithubIcon from "../assets/github-icon.svg?react";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <p className="footer-text">
        Sean Lau · Built with React & Vite · {new Date().getFullYear()}
      </p>
      <div className="footer-links">
        <a
          href="https://github.com/seankql"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sean-lau-445239226/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="footer-icon" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
