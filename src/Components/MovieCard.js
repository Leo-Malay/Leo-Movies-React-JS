import React from "react";
import "../CSS/movie.css";

const MovieCard = ({ props }, isLinked) => {
    /*
     * Props to be pass as follow:
     * props={
     *      id:"",
     *      name:"",
     *      image:"",
     *      category:"",
     *      rating:"",
     *      demosrc:"",
     * }
     */
    return (
        <div className="MovieContainer">
            <img src={props.image} alt={props.name} className="MovieImage" />
            <p className="MovieName">{props.name}</p>
            <div className="InLine">
                <p className="MovieCategory">{props.category}</p>
                <p className="MovieRating">{props.rating}/5</p>
            </div>
        </div>
    );
};

export default MovieCard;
