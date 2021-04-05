import React from "react";
import { Link } from "react-router-dom";
import "../CSS/footer.css";

const Footer = () => {
    return (
        <div className="FooterContainer">
            <div className="left">
                <Link to={"/"}>
                    <p className="HeaderHead">LEO MOVIES</p>
                </Link>
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
            <p className="CopyRight">
                None of the Movie-Images shown are Owned by me! Credit goes to
                their respetive Owners!
            </p>
        </div>
    );
};

export default Footer;
