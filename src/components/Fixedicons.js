import React from "react";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "../assets/github-icon.svg";
import "../styles/Fixedicons.css";

function Fixedicons() {
    return (
        <div className="fixed-icons">
            <a href="https://www.linkedin.com/in/sean-lau-445239226/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="icon-fixed" />
            </a>
            <a href="https://github.com/seankql" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="icon-fixed" />
            </a>
        </div>
    );
}

export default Fixedicons;