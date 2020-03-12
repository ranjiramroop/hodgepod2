import React, { useState, useEffect } from "react";
import axios from "axios";

import omdbapi from "../../utils/OMDBAPI"
import Card from "../Card";
import HeaderMain from "../HeaderMain";
import Slider from "../NetflixSlider";

function OMDBTEST(props) {
  console.log("OMDB TEST", props.searchTerm)
  const [data, setData] = useState({ searchResults: [] });
  const [searchInput, setSearchInput] = useState(props.searchTerm);

  useEffect(() => {
    searchQuery()
  }, []);
  // variable that is used here is the searchInput, and the setSearchInput is the function that will be used to change the state
  const searchQuery = async () => {
    console.log("hello");

    omdbapi.search(searchInput).then(result => {
      console.log("RESULT", result)
      setData({ searchResults: result.data.Search })
    })


  };

  return (
    <div>


      <div>
        {/* {data.results
          ? data.results.map(podcast => <PodcastContainer podcast={podcast} />)
          : null} */}
        <div>

          <div style={{ display: "flex" }}>
            {/* {data.searchResults ? (
              <h1>there are results</h1>
              
              
              ) : (
                <h6>nothing yet</h6>
            // )} */}
            {data.searchResults.length > 0 ? <Slider>

              {data.searchResults.map((movie, i) => {
                return (
                  <>
                    {/* <h1>{movie.Title}</h1> */}
                    <Slider.Item2 movie={movie} key={i} />
                  </>
                )
              })}
            </Slider> : " "}

            {/* {data.searchResults ? (
             // <Slider>
                {data.searchResults.map((movie, i) => (
                  <h1>movie.title</h1>
                  //<Slider.Item podcast={movie} key={i}></Slider.Item>
                ))}
             </Slider>
            ) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OMDBTEST;