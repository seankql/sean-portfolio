import React from 'react';
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/Aboutme.css";
import "./styles/Projects.css";
import "./styles/Experience.css";
import "./styles/Skills.css";

import videoBackground from "./assets/sean-portfolio-background.mp4"

function App() {
  return (
    <div>
      <div className="video-background">
        <video src={videoBackground} autoPlay loop muted />
      </div>
      <Navbar />
      <Aboutme />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
