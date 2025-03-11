import React, { useState } from "react";
import "../styles/AboutMe.css";
import { ReactComponent as Icon1 } from "../assets/icon1.svg";
import { ReactComponent as Icon2 } from "../assets/icon2.svg";
import { ReactComponent as Icon3 } from "../assets/icon3.svg";

function AboutMe() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        const email = "verylausean@gmail.com";
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch((err) => {
                console.error("Failed to copy email: ", err);
            });
    };

    return (
        <section id="about-me">
            <div className="about-me-box">
                <div>
                    <h1>Sean Lau</h1>
                    <h4>Software Engineer @ Toronto, CA</h4>
                </div>
                <div>
                    <div className="email-box">
                        <Icon1 className="icon" onClick={handleCopyEmail} />
                        {copied && <span className="copy-notification">Email Copied!</span>}
                    </div>
                    <a href="https://www.linkedin.com/in/sean-lau-445239226/" target="_blank" rel="noopener noreferrer">
                        <Icon2 className="icon" />
                    </a>
                    <a href="https://github.com/seankql" target="_blank" rel="noopener noreferrer">
                        <Icon3 className="icon" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
