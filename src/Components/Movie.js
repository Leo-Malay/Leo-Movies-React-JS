import React from "react";
import "../CSS/movie.css";

const Movie = () => {
    return <div></div>;
};

const MovieCard = ({ props }) => {
    return (
        <div className="MovieContainer">
            <img src={props.src} alt={props.name} className="MovieImage" />
            <p className="MovieName">{props.name}</p>
            <div className="InLine">
                <p className="MovieCategory">{props.category}</p>
                <p className="MovieRating">{props.rating}/5</p>
            </div>
        </div>
    );
};

export default { Movie, MovieCard };
