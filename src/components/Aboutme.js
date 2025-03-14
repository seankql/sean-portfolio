import React from "react";
import "../styles/Aboutme.css";
import { ReactComponent as EmailIcon } from "../assets/email-icon.svg";
import { ReactComponent as LocationIcon } from "../assets/location-icon.svg";
import { ReactComponent as TitleIcon } from "../assets/job-icon.svg";
import Fixedicons from "./Fixedicons";

function Aboutme() {
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
                    <h1 className="title name">Sean Lau</h1>
                    <div className="title-box">
                        <TitleIcon className="icon" />
                        <span className="title-text">Software Engineer</span>
                    </div>
                    <div className="location-box">
                        <LocationIcon className="icon" />
                        <span className="location-text">Toronto, CAN</span>
                    </div>
                    <div className="email-box">
                        <EmailIcon className="icon" onClick={handleCopyEmail} />
                        <span className="email-text">verylausean@gmail.com</span>
                    </div>
                </div>
            </div>
            <Fixedicons />
        </section>
    );
}

export default Aboutme;
