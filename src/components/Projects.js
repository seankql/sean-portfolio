import CaptureText from "../assets/capture-text-project.png";
import SpendWise from "../assets/spendwise-project.png";
import TappedIn from "../assets/tappedin-project.png";
import Portfolio from "../assets/portfolio-project.png";

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="title">Projects</h2>

            <a href="https://github.com/seankql/project-spendwise" className="project-box" target="_blank" rel="noopener noreferrer">
                <h3 className="project-title">SpendWise</h3>
                <img src={SpendWise} alt="SpendWise" className="project-image" />
                <p className="project-description">Spendings tracker and visualizer.</p>
            </a>

            <a href="https://github.com/UTSCCSCC01/finalprojectf22-tappedin" className="project-box" target="_blank" rel="noopener noreferrer">
                <h3 className="project-title">TappedIn</h3>
                <img src={TappedIn} alt="TappedIn" className="project-image" />
                <p className="project-description">Seamless social media sharing and networking.</p>
            </a>

            <a href="https://github.com/seankql/capture-text" className="project-box" target="_blank" rel="noopener noreferrer">
                <h3 className="project-title">CaptureText</h3>
                <img src={CaptureText} alt="CaptureText" className="project-image" />
                <p className="project-description">Screenshot to text and translation.</p>
            </a>

            <a href="https://github.com/seankql/sean-portfolio" className="project-box" target="_blank" rel="noopener noreferrer">
                <h3 className="project-title">Personal Portfolio</h3>
                <img src={Portfolio} alt="Personal Portfolio" className="project-image" />
                <p className="project-description">This website!</p>
            </a>
        </section>
    );
};

export default Projects;
