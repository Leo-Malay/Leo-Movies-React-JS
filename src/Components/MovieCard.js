import React from "react";
import { Link } from "react-router-dom";
import "../CSS/movie.css";

const MovieCard = ({ props }) => {
    /*
     * Props to be pass as follow:
     * props={
     *      id:"",
     *      name:"",
     *      image:"",
     *      category:"",
     *      rating:"",
     * }
     */
    return (
        <Link to={`/movie/${props.id}`}>
            <div className="MovieContainer">
                <img
                    src={props.image}
                    alt={props.name}
                    className="MovieImage"
                />
                <p className="MovieName">{props.name}</p>
                <div className="InLine">
                    <p className="MovieCategory">{props.category}</p>
                    <p className="MovieRating">{props.rating}/5</p>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
