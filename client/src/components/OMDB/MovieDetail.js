import React from "react";
import "./MovieDetail.css";
function MovieDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3 className="moreinfoHeading">Director(s): {props.director}</h3>
      <h3 className="moreinfoHeading">Genre: {props.genre}</h3>
      <h3 className="moreinfoHeading">Plot: {props.plot}</h3>
    </div>
  );
}

export default MovieDetail;