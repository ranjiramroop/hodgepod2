import React, { useState, useEffect } from "react";
import axios from "axios";
import PodcastContainer from "./PodcastContainer";

import Card from "./Card";
import HeaderMain from "./HeaderMain";
import Slider from "./NetflixSlider";

const PODCAST = props => {
  const searchTerm = props.searchTerm;
  const defaultSearch = props.defaultSearch;

  const [data, setData] = useState({});
  let searchQuery = {};
  let result;

  useEffect(() => {
    if (!defaultSearch) {
      searchQuery(searchTerm);
    } else {
      searchQuery("Best");
    }
  }, [searchTerm]);

  searchQuery = async () => {
    let url;
    const APIKey = "d8dac105d44b4f5386d68a2c30ef0a6c"; //New Key

    url = "https://listen-api.listennotes.com/api/v2/search?q=" + searchTerm;
    result = await axios(url, {
      headers: {
        "X-ListenAPI-Key": APIKey
      }
    });
    console.log("result", result);
    if (data != result.data) {
      setData(result.data);
    }
  };

  return (
    <div>
      {data ? (
        <div>
          <div style={{ display: "flex" }}>
            {data.results ? (
              <Slider>
                {data.results.map((podcast, i) => (
                  <Slider.Item podcast={podcast} key={i}></Slider.Item>
                ))}
              </Slider>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      ) : (
        <p>No Podcast Found</p>
      )}
    </div>
  );
};

export default PODCAST;
//add a button to do the genre API call
//save the array from the podcast - done

//map through the data.results with .map - done by johnny
//build components without state by passing props
//so my podcastContainer will hacve to be redone from the render down
// google search using maps to pass hooks as props

//this.props.podcasts through the podcastContainer.js
