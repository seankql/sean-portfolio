import React from "react";
import "../styles/Skills.css";

const skills = [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "C", icon: "devicon-c-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
    { name: "R", icon: "devicon-r-plain colored" },

    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Figma", icon: "devicon-figma-plain colored" },

    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express.js", icon: "devicon-express-original" },

    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "Neo4j", icon: "devicon-neo4j-plain colored" },
    { name: "Firebase Database", icon: "devicon-firebase-plain colored" },
    { name: "SharePoint", icon: "devicon-azure-plain colored" },
    { name: "Power BI", icon: "devicon-azure-plain colored" },

    { name: "Power Automate", icon: "devicon-azure-plain colored" },
    { name: "Redis", icon: "devicon-redis-plain colored" },

    { name: "Cypress", icon: "devicon-cypressio-plain" },
    { name: "JMeter", icon: "devicon-feathersjs-original" },
    { name: "TestRail", icon: "fas fa-bug skill-icon" },
    { name: "Sentry", icon: "devicon-sentry-original" },


    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Auth0", icon: "fas fa-shield skill-icon" },
    { name: "SendGrid", icon: "fas fa-paper-plane skill-icon" },

    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Jira", icon: "devicon-jira-plain colored" },
    { name: "Postman", icon: "devicon-postman-plain colored" }
];

const Skills = () => {
    return (
        <section id="skills">
            <h2 className="skillsTitle">Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-bubble">
                        <i className={`${skill.icon} skill-icon`}></i>
                        {skill.name}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
