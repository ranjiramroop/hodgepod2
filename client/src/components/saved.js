import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Podcast from "./PCAPITEST";
import PODCAST from "./PODCAST";
import HeaderMain from "./HeaderMain";
import SearchContainer from "./components/SearchContainer";
import TopNav from "./components/TopNav";
import "./components/main.css";
import API from "../utils/API";

function saved() {
  const [PODCAST, setPODCAST] = useState([]);

  useEffect(() => {
    loadPODCAST();
  }, [])

  function loadPODCAST() {
    API.getPODCAST()
      .then(res => setPODCAST(res.data))
      .catch(err => console.log(err));
  };

  console.log(PODCAST);
  return (
      <div>
      <h1>Podcasts On My List</h1>
      {PODCAST.length ? (
          {PODCAST.map(PODCAST => (
            <ListItem key={podcast._id}>
              <DeleteBtn onClick={() => deleteBook(podcast._id)} />
              <br></br>
              <div className="text-center">
                <h2>Podcast Name: {props.podcastName}</h2>
                <img
                  alt={props.podcast}
                  className="img-fluid"
                  src={props.podcast}
                  style={{ margin: "0 auto" }}
                />
                <h3>Title: {props.Title}</h3>
                <h3>Description: {props.Description}</h3>
                <a href={props.Link}>
                  {" "}
                  <h3>Go to website</h3>
                </a>
              </div>
            </ListItem>
          ))}
      ) : (
        <h3>No Results to Display</h3>
      )}
      </div>

  );
}

export default saved;
