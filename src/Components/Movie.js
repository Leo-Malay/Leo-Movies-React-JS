import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import "../CSS/movie.css";
import data from "../Data/data.json";

const MovieList = () => {
    const [SearchedText, setTitle] = useState("");
    return (
        <div>
            <input
                type="text"
                className="SearchBar"
                placeholder="Search your favourite movie :)"
                onChange={(event) => setTitle(event.target.value)}
            />
            <div>
                {data.map((ele) => {
                    if (
                        ele.name
                            .toUpperCase()
                            .includes(SearchedText.toUpperCase())
                    ) {
                        return (
                            <Link to={`/movie/${ele.id}`} key={ele.id}>
                                <MovieCard props={ele} />
                            </Link>
                        );
                    }
                    return "";
                })}
            </div>
        </div>
    );
};

const Movie = () => {
    return (
        <div>
            <p className="PageHead">What Are We Watching Today?</p>
            <MovieList />
        </div>
    );
};

export default Movie;
