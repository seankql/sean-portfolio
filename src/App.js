import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/Aboutme.css";
import "./styles/Projects.css";
import "./styles/Experience.css";

function App() {
  return (
    <div>
      <Navbar />
      <Aboutme />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
