import React, { useState, useEffect } from "react";
import axios from "axios";
import PodcastContainer from "./PodcastContainer";

import Card from "./Card";
import HeaderMain from "./HeaderMain";
import Slider from "./NetflixSlider";

function PCAPITEST() {
  const [data, setData] = useState({ searchResults: [] });
  const [searchInput, setSearchInput] = useState("Best Podcasts");
  useEffect(() => {
    searchQuery(searchInput);
  }, []);
  // variable that is used here is the searchInput, and the setSearchInput is the function that will be used to change the state
  const searchQuery = async () => {
    console.log("hello");
    const url =
      "https://listen-api.listennotes.com/api/v2/search?q=" + searchInput;
    const APIKey = "9022dcf8bc974dc5a27989ed9f2792c4";

    const result = await axios(url, {
      headers: {
        "X-ListenAPI-Key": APIKey
      }
    });
    setData(result.data);
    console.log(result.data);
    console.log(data);
  };

  return (
    <div>
      <HeaderMain />{" "}
      <input
        type="text"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />{" "}
      <button onClick={searchQuery}>Search</button>
      <div>
        {/* {data.results
          ? data.results.map(podcast => <PodcastContainer podcast={podcast} />)
          : null} */}
        <div>
          {/* <PCAPITEST></PCAPITEST> */}
          <div style={{ display: "flex" }}>
            {data.results ? (
              <Slider>
                {data.results.map((podcast, i) => (
                  <Slider.Item podcast={podcast} key={i}></Slider.Item>
                ))}
              </Slider>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PCAPITEST;
//add a button to do the genre API call
//save the array from the podcast - done

//map through the data.results with .map - done by johnny
//build components without state by passing props
//so my podcastContainer will hacve to be redone from the render down
// google search using maps to pass hooks as props

//this.props.podcasts through the podcastContainer.js
