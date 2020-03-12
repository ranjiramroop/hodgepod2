import React, { Component } from "react";
import PCDetail from "./PCDetail";
import PCAPITEST from "./PCAPITEST";
import PCCard from "./PCCard";
import API from "../utils/API";
import Card from "./PodcastContainer";

class PodcastContainer extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the Podcast "Bigger Pockets"
  // componentDidMount() {
  //   this.searchPodcasts("Bigger Pockets");
  // }

  // searchPodcasts = query => {
  //   API.search(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // When the form is submitted, search the Podcasts (listenNotes) API for the value of `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchPodcasts(this.state.search);
  // };

  render() {
    console.log(this.props.podcasts);
    return (
      <div>
        <Card>
          {/* <PCDetail>
            <h3>Publisher: {this.props.publisher}</h3>
            <h3>Genre: {this.props.genre}</h3>
            <h3>Go to Podcast: {this.props.podcastWebsite}</h3>
          </PCDetail> */}
        </Card>
      </div>
    );
    //   {
    //   console.log(this.props);
    //   return (
    //     <PCCard
    //       heading={
    //         this.state.result.title_original || "Search for a Podcast to Begin"
    //       }
    //     >
    //       {this.state.result.title_original ? (
    //         <PCDetail
    //           title={this.state.result.title_original}
    //           src={this.state.result.thumbnail}
    //           publisher={this.state.result.publisher_highlighted}
    //         />
    //       ) : (
    //         <h3> No Results to Display</h3>
    //       )}
    //     </PCCard>
    //   );
    // }
  }
}

export default PodcastContainer;
