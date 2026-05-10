import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import SpaceInvaders from "./components/SpaceInvaders";
import Footer from "./components/Footer";

import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/Aboutme.css";
import "./styles/Experience.css";
import "./styles/Skills.css";
import "./styles/Projects.css";
import "./styles/Certificates.css";
import "./styles/SpaceInvaders.css";
import "./styles/Footer.css";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.section-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <div className="bg-grid" />
      <div className="bg-orb" />
      <div className="bg-orb bg-orb-2" />
      <div className="content">
        <Navbar />
        <Aboutme />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Footer />
        <SpaceInvaders />
      </div>
    </div>
  );
}

export default App;
