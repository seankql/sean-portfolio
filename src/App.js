import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/AboutMe.css";
import "./styles/Projects.css";
import "./styles/Experience.css";

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
