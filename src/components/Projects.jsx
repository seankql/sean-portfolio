import CaptureText from "../assets/capture-text-project.png";
import SpendWise from "../assets/spendwise-project.png";
import TappedIn from "../assets/tappedin-project.png";
import Portfolio from "../assets/portfolio-project.png";
import Heatmap from "../assets/heatmap-project.png";
import Covid from "../assets/covid-project.png";
import CovidReport from "../assets/covid-19-outcome-prediction-model-report.pdf";
import "../styles/Projects.css";

const projects = [
  {
    title: 'SpendWise',
    description: 'Spendings tracker and visualizer.',
    image: SpendWise,
    href: 'https://github.com/seankql/project-spendwise',
    external: true,
    cls: 'bento-featured',
  },
  {
    title: 'TappedIn',
    description: 'Seamless social media sharing and networking.',
    image: TappedIn,
    href: 'https://github.com/UTSCCSCC01/finalprojectf22-tappedin',
    external: true,
    cls: 'bento-tall',
  },
  {
    title: 'COVID-19 Prediction Model',
    description: 'Predictive model in R to classify COVID-19 case outcomes.',
    image: Covid,
    href: CovidReport,
    download: true,
    cls: '',
  },
  {
    title: 'Google Timeline Heatmap',
    description: 'Visualizes personal location data using a heatmap.',
    image: Heatmap,
    href: 'https://github.com/seankql/google-timeline-heatmap',
    external: true,
    cls: '',
  },
  {
    title: 'CaptureText',
    description: 'Screenshot to text and translation.',
    image: CaptureText,
    href: 'https://github.com/seankql/capture-text',
    external: true,
    cls: 'bento-wide',
  },
  {
    title: 'Personal Portfolio',
    description: 'This website!',
    image: Portfolio,
    href: 'https://github.com/seankql/sean-portfolio',
    external: true,
    cls: '',
  },
];

const Projects = () => (
  <section id="projects" className="section-animate">
    <div className="section-container">
      <h2 className="section-title">Projects</h2>
      <div className="bento-grid">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className={`bento-card ${p.cls}`}
            target={p.external ? '_blank' : undefined}
            rel={p.external ? 'noopener noreferrer' : undefined}
            download={p.download || undefined}
          >
            <div
              className="bento-bg"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div className="bento-overlay" />
            <div className="bento-content">
              <span className="bento-icon">
                {p.external ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                )}
              </span>
              <div>
                <h3 className="bento-title">{p.title}</h3>
                <p className="bento-desc">{p.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
