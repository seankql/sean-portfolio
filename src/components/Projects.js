import CaptureText from "../assets/capture-text-project.png";
import SpendWise from "../assets/spendwise-project.png";
import TappedIn from "../assets/tappedin-project.png";
import Portfolio from "../assets/portfolio-project.png";

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <a href="https://github.com/seankql/project-spendwise" className="project-box" target="_blank" rel="noopener noreferrer">
                <h3>SpendWise</h3>
                <img src={SpendWise} alt="SpendWise" className="project-image" />
                <p>Spendings tracker and visualizer.</p>
                <div className="skills">
                    <span className="skill-bubble">PostgreSQL</span>
                    <span className="skill-bubble">Express.js</span>
                    <span className="skill-bubble">React</span>
                    <span className="skill-bubble">Node.js</span>
                    <span className="skill-bubble">JavaScript</span>
                    <span className="skill-bubble">HTML</span>
                    <span className="skill-bubble">CSS</span>
                    <span className="skill-bubble">Redis</span>
                    <span className="skill-bubble">SendGrid</span>
                    <span className="skill-bubble">Sentry</span>
                    <span className="skill-bubble">Auth0</span>
                    <span className="skill-bubble">Docker</span>
                    <span className="skill-bubble">Git</span>
                    <span className="skill-bubble">Postman</span>
                </div>
            </a>

            <a href="https://github.com/UTSCCSCC01/finalprojectf22-tappedin" className="project-box" target="_blank" rel="noopener noreferrer">
                <h3>TappedIn</h3>
                <img src={TappedIn} alt="TappedIn" className="project-image" />
                <p>Seamless social media sharing and networking.</p>
                <div className="skills">
                    <span className="skill-bubble">MongoDB</span>
                    <span className="skill-bubble">Express.js</span>
                    <span className="skill-bubble">React</span>
                    <span className="skill-bubble">Node.js</span>
                    <span className="skill-bubble">TypeScript</span>
                    <span className="skill-bubble">HTML</span>
                    <span className="skill-bubble">CSS</span>
                    <span className="skill-bubble">Jira</span>
                    <span className="skill-bubble">Figma</span>
                    <span className="skill-bubble">Git</span>
                    <span className="skill-bubble">Postman</span>
                </div>
            </a>

            <a href="https://github.com/seankql/capture-text" className="project-box" target="_blank" rel="noopener noreferrer">
                <h3>CaptureText</h3>
                <img src={CaptureText} alt="CaptureText" className="project-image" />
                <p>Screenshot to text and translation.</p>
                <div className="skills">
                    <span className="skill-bubble">JavaScript</span>
                    <span className="skill-bubble">HTML</span>
                    <span className="skill-bubble">CSS</span>
                    <span className="skill-bubble">Chrome Extension APIs</span>
                    <span className="skill-bubble">Postman</span>
                </div>
            </a>

            <a href="https://github.com/seankql/sean-portfolio" className="project-box" target="_blank" rel="noopener noreferrer">
                <h3>Personal Portfolio</h3>
                <img src={Portfolio} alt="Personal Portfolio" className="project-image" />
                <p>This website!</p>
                <div className="skills">
                    <span className="skill-bubble">JavaScript</span>
                    <span className="skill-bubble">React</span>
                    <span className="skill-bubble">HTML</span>
                    <span className="skill-bubble">CSS</span>
                </div>
            </a>
        </section>
    );
};

export default Projects;
