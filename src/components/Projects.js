import Project1 from "../assets/capture-text-project.png";
import Project2 from "../assets/spendwise-project.png";
import Project3 from "../assets/tappedin-project.png";
import Project4 from "../assets/portfolio-project.png";

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <a href="https://github.com/seankql/capture-text" className="project-box" target="_blank" rel="noopener noreferrer">
                <h3>CaptureText</h3>
                <img src={Project1} alt="CaptureText" className="project-image" />
                <p>Screenshot to text and translation.</p>
            </a>

            <a href="https://github.com/seankql/project-spendwise" className="project-box" target="_blank" rel="noopener noreferrer">
                <h3>SpendWise</h3>
                <img src={Project2} alt="SpendWise" className="project-image" />
                <p>Spendings tracker and visualizer.</p>
            </a>

            <a href="https://github.com/UTSCCSCC01/finalprojectf22-tappedin" className="project-box" target="_blank" rel="noopener noreferrer">
                <h3>TappedIn</h3>
                <img src={Project3} alt="TappedIn" className="project-image" />
                <p>Seamless social media sharing and networking.</p>
            </a>

            <a href="https://github.com/seankql/sean-portfolio" className="project-box" target="_blank" rel="noopener noreferrer">
                <h3>Personal Portfolio</h3>
                <img src={Project4} alt="Personal Portfolio" className="project-image" />
                <p>This website!</p>
            </a>
        </section>
    );
};

export default Projects;
