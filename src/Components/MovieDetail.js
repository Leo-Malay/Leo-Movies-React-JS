import React from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import data from "../Data/data.json";
import "../CSS/moviedetail.css";

function FindMovie(id) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return data[i];
        }
    }
    return -1;
}
const MovieDetail = ({ props }) => {
    const { id } = useParams();
    var mdata = FindMovie(id);
    if (mdata === -1) {
        return (
            <div ClassName="InLine">
                <p className="HeaderHead">
                    No such movie found! Please try again!
                </p>
            </div>
        );
    } else {
        return (
            <div>
                <p className="MovieNameDetail">{mdata.name}</p>
                <iframe
                    width="560"
                    height="340"
                    title={mdata.id}
                    src={mdata.demosrc + "?controls=0"}
                >
                    Video
                </iframe>
                <br />
                <MovieCard props={mdata} isLinked={{ value: true }} />
            </div>
        );
    }
};

export default MovieDetail;
