import React, { Component } from "react";
import Card from "./Card";
import MovieDetail from "./MovieDetail";
import API from "../utils/OMDBAPI;
import MovieCard from"./MovieCard";

// import PCCard from "./PCCard";



class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchMovies("The Matrix");
  }

  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      
            <MovieCard
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              {this.state.result.Title ? (
                <MovieDetail
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            
    );
  }
}

export default OmdbContainer;