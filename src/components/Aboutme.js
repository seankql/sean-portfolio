import React from "react";
import "../styles/AboutMe.css";
import { ReactComponent as EmailIcon } from "../assets/email-icon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "../assets/github-icon.svg";
import { ReactComponent as LocationIcon } from "../assets/location-icon.svg";
import { ReactComponent as TitleIcon } from "../assets/job-icon.svg";

function AboutMe() {
    const handleCopyEmail = () => {
        const email = "verylausean@gmail.com";
        navigator.clipboard.writeText(email).catch((err) => {
            console.error("Failed to copy email: ", err);
        });
    };

    return (
        <section id="about-me">
            <div className="about-me-box">
                <div>
                    <h1>Sean Lau</h1>
                    <div className="title-box">
                        <TitleIcon className="icon" />
                        <span className="title-text">Software Engineer</span>
                    </div>
                    <div className="location-box">
                        <LocationIcon className="icon" />
                        <span className="location-text">Toronto, CA</span>
                    </div>
                    <div className="email-box">
                        <EmailIcon className="icon" onClick={handleCopyEmail} />
                        <span className="email-text">verylausean@gmail.com</span>
                    </div>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/sean-lau-445239226/" target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon className="icon" />
                    </a>
                    <a href="https://github.com/seankql" target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="icon" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
