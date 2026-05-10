import React from 'react';
import "../styles/Skills.css";

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'C', icon: 'devicon-c-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'SQL', icon: 'devicon-azuresqldatabase-plain colored' },
      { name: 'R', icon: 'devicon-r-plain colored' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: 'devicon-html5-plain colored' },
      { name: 'CSS', icon: 'devicon-css3-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Figma', icon: 'devicon-figma-plain colored' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Express.js', icon: 'devicon-express-original' },
      { name: 'Flask', icon: 'devicon-flask-original' },
    ],
  },
  {
    category: 'Databases & Storage',
    skills: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
      { name: 'Neo4j', icon: 'devicon-neo4j-plain colored' },
      { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
      { name: 'Redis', icon: 'devicon-redis-plain colored' },
    ],
  },
  {
    category: 'Testing',
    skills: [
      { name: 'Cypress', icon: 'devicon-cypressio-plain' },
      { name: 'Selenium', icon: 'devicon-selenium-original colored' },
      { name: 'JMeter', icon: 'fas fa-gauge-high' },
      { name: 'TestRail', icon: 'fas fa-vial' },
      { name: 'Sentry', icon: 'devicon-sentry-original' },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'Jira', icon: 'devicon-jira-plain colored' },
      { name: 'Postman', icon: 'devicon-postman-plain colored' },
      { name: 'Auth0', icon: 'fas fa-shield-halved' },
      { name: 'SendGrid', icon: 'fas fa-paper-plane' },
    ],
  },
  {
    category: 'Analytics & BI',
    skills: [
      { name: 'Power BI', icon: 'fas fa-chart-bar' },
      { name: 'Power Apps', icon: 'fas fa-table-cells' },
      { name: 'Power Automate', icon: 'fas fa-arrows-rotate' },
      { name: 'SharePoint', icon: 'fas fa-share-nodes' },
      { name: 'Excel (VBA)', icon: 'fas fa-file-excel' },
    ],
  },
];

let globalChipIndex = 0;

const Skills = () => {
  globalChipIndex = 0;

  return (
    <section id="skills" className="section-animate">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-chips">
                {group.skills.map((skill) => {
                  const idx = globalChipIndex++;
                  return (
                    <div
                      key={skill.name}
                      className="skill-chip"
                      style={{ '--chip-i': idx }}
                    >
                      <i className={`${skill.icon} skill-chip-icon`} />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
