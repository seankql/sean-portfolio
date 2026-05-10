import React, { useState } from "react";
import "../styles/Aboutme.css";
import EmailIcon from "../assets/email-icon.svg?react";
import LocationIcon from "../assets/location-icon.svg?react";
import TitleIcon from "../assets/job-icon.svg?react";
import Fixedicons from "./Fixedicons";

function Aboutme() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        const email = "verylausean@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch((err) => {
            console.error("Failed to copy email: ", err);
        });
    };

    return (
        <section id="about-me">
            <div className="about-me-box">
                <div>
                    <h1 className="title name">Sean Lau</h1>
                    <div className="title-box">
                        <TitleIcon className="icon" />
                        <span className="title-text">Software Engineer, Data Analyst, Data Scientist</span>
                    </div>
                    <div className="location-box">
                        <LocationIcon className="icon" />
                        <span className="location-text">Toronto, CAN</span>
                    </div>
                    <div className="email-box" onClick={handleCopyEmail}>
                        <EmailIcon className="icon" />
                        <span className="email-text">verylausean@gmail.com</span>
                        <span className={`copied-tooltip${copied ? " visible" : ""}`}>Copied!</span>
                    </div>
                </div>
            </div>
            <Fixedicons />
        </section>
    );
}

export default Aboutme;
