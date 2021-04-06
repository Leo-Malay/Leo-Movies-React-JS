import React from "react";
import "../CSS/aboutme.css";

const AboutMe = () => {
    return (
        <div>
            <p className="AmName">Malay Bhavsar</p>
            <p className="AmSubName">Aka LEO-Malay</p>
            <center>
                <p className="AmDesc">
                    I am a Student doing an UnderGraduate in Information
                    Technology. Skills: Python, JavaScript, SQL, Java, C/C++,
                    Git etc. I like to work on different things and working with
                    differet peoples. If ou have any Idea in mind please feel
                    free to contact me!
                </p>
            </center>
            <a
                href="https://www.linkedin.com/in/leo-malay-bhavsar/"
                className="AmLink"
                target="_blank"
                rel="noreferrer"
            >
                LinkedIn
            </a>
            <br />
            <a
                href="https://github.com/Leo-Malay"
                className="AmLink"
                target="_blank"
                rel="noreferrer"
            >
                Github
            </a>
        </div>
    );
};

export default AboutMe;
