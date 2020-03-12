import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import Modal from "../modal/Moviemodal";
import Vote from "../upndownVote/ticker";
import "./Item.scss";

const Item2 = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.imdbID;

      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--open": isActive
          })}
        >
          <div class = "container">
            <div class = "row">
          <img src={movie.Poster} alt="" />
              </div>
            </div>
            <div class ="row">
              <div class ="col-sm-4">
          <div class="componentLine"> <Modal movie={movie} /> </div>
              </div>
              <div class ="col-sm-4"></div>
              <div class ="col-sm-4">
          <div class="componentLine"> <Vote /> </div>
              </div>
            </div>
          </div>
       
      );
    }}
  </SliderContext.Consumer>
);

export default Item2;
