import React, { Component } from "react";
import Main from "./Main";

class Card extends Component {
  state = {
    expanded: false,
    loading: true,
    fullscreen: false,
    colors: []
  };
  render() {
    return (
      <div class="stage container z-depth-3">
        <div class="layer layer-1 white-text">
          <i class="material-icons left">menu</i>
        </div>

        <div class="layer layer-2 z-depth-1">
          <div class="center">
            <div class="swiper-container">
              <div id="test">
                <Main></Main>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
