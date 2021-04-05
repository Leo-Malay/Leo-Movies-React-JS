import React from "react";
import { Link } from "react-router-dom";
import "../CSS/home.css";

const Home = () => {
    return (
        <div>
            <p className="PageTitle">Welcome to Leo-Movies</p>
            <center>
                <p className="PageSubTitle">
                    Developed by Malay Bhavsar to showcast his all time hot
                    favourite Movies!
                    <br /> Here You will find many movies that have been famous
                    among many people. If you think that there's some movie
                    missing then please feel free to contact me via Email given
                    in the footer section.
                    <br />
                </p>
            </center>
            <Link to={"/movie"}>
                <button className="MovieBtn">Go to Movies</button>
            </Link>
        </div>
    );
};

export default Home;
