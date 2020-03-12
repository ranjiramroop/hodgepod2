import React from "react";
import "./index.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}


export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export function SearchRadios(props) {
  //should pass through props TODO make scalable
  //TODO style better
  return (


<div class="radio-toolbar">
    <input type="radio" id="radioPodcast" name="radioMedia" value="podcasts" onClick={props.handleInputChange} name="searchType" defaultChecked />
    <label for="radioPodcast">podcasts</label>

    <input type="radio" id="radioMovie" name="radioMedia" value="movies" onClick={props.handleInputChange} name="searchType" />
    <label for="radioMovie">movies</label>
</div>

  );
}
