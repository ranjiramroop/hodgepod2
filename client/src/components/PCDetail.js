import React from "react";

function PCDetail(props) {
  return (
    <div className="text-center">
      <h1>Podcast Name: {props.podcastName}</h1>
      <img
        alt={props.podcast}
        className="img-fluid"
        src={props.podcast}
        style={{ margin: "0 auto" }}
      />
      <h3>Title: {props.Title}</h3>
      <h3>Description: {props.Description}</h3>
      <a href={props.Link}> <h3>Go to website</h3></a>
    </div>
  );
}

export default PCDetail;
