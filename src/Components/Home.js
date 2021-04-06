import React from "react";
import { Link } from "react-router-dom";
import "../CSS/home.css";

const Home = () => {
    return (
        <div>
            <p className="PageTitle">Welcome to Leo-Movies</p>
            <Link to={"/movie"}>
                <button className="MovieBtn">Go to Movies</button>
            </Link>
            <center>
                <p className="PageSubTitle">
                    I have made this website using ReactJS. Here I have mentions
                    all the movies that I like watching Over and Over, Again and
                    Again.
                </p>
                <p className="PageSubTitle">
                    <b>Made with 💛 by Malay :)</b>
                </p>
            </center>
        </div>
    );
};

export default Home;
