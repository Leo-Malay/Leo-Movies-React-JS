import React from "react";
import { Link } from "react-router-dom";
import "../CSS/footer.css";

const Footer = () => {
    return (
        <div className="FooterContainer">
            <p className="CopyRight">
                None of the Movie-Images shown are Owned by me! Credit goes to
                their respetive Owners!
            </p>
            <div className="left">
                <p className="FooterHead">LEO MOVIES</p>
                <div>
                    <Link to="/" className="FootLink">
                        Home
                    </Link>
                    <Link to="/movie" className="FootLink">
                        Movie
                    </Link>
                    <Link to="/aboutme" className="FootLink">
                        About Me
                    </Link>
                </div>
            </div>
            <div className="right">
                <p className="AboutMe">
                    <b>Developer:</b> Malay Bhavsar
                </p>
                <p className="AboutMe">
                    <b>Email:</b> malaybhavsar.290@gmail.com
                </p>
                <p className="AboutMe">Feel Free to contact me!</p>
            </div>
        </div>
    );
};

export default Footer;
