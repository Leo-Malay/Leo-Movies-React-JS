import React from "react";
import { Link } from "react-router-dom";
import "../CSS/header.css";

const Header = () => {
    return (
        <div className="HeaderContainer">
            <Link to="/">
                <p className="HeaderHead">LEO MOVIES</p>
            </Link>
        </div>
    );
};

export default Header;
