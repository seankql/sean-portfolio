import React, { useState, useEffect } from 'react';
import EmailIcon from "../assets/email-icon.svg?react";
import LocationIcon from "../assets/location-icon.svg?react";
import LinkedinIcon from "../assets/linkedin-icon.svg?react";
import GithubIcon from "../assets/github-icon.svg?react";
import "../styles/Aboutme.css";

const roles = ['Software Engineer', 'Data Analyst', 'Data Scientist'];

const Aboutme = () => {
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout;
    if (isTyping) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isTyping, roleIndex]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('verylausean@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  return (
    <section id="about-me" className="hero">
      <div className="hero-orb" />
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Sean Lau</h1>
        <div className="hero-role">
          <span className="role-text">{displayed}</span>
          <span className="hero-cursor">|</span>
        </div>
        <div className="hero-meta">
          <div className="hero-meta-item">
            <LocationIcon className="hero-icon" />
            <span>Toronto, CAN</span>
          </div>
          <div
            className="hero-meta-item hero-email-btn"
            onClick={handleCopyEmail}
            role="button"
            tabIndex={0}
          >
            <EmailIcon className="hero-icon" />
            <span>verylausean@gmail.com</span>
            <span className={`copied-tooltip${copied ? ' visible' : ''}`}>Copied!</span>
          </div>
        </div>
        <div className="hero-socials">
          <a
            href="https://www.linkedin.com/in/sean-lau-445239226/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-btn"
          >
            <LinkedinIcon className="social-svg" />
            LinkedIn
          </a>
          <a
            href="https://github.com/seankql"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-btn"
          >
            <GithubIcon className="social-svg" />
            GitHub
          </a>
        </div>
        <a href="#experience" className="hero-scroll-hint">
          <span>scroll to explore</span>
          <span className="scroll-arrow">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Aboutme;
