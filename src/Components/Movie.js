import React, { useState } from "react";
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
                        return <MovieCard key={ele.id} props={ele} />;
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
            <p className="PageHead">What Are We Gonna Watch Today?</p>
            <MovieList />
        </div>
    );
};

export default Movie;
