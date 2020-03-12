import React from "react";
import "./ticker.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinHearts } from '@fortawesome/free-solid-svg-icons';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';

export default class Vote extends React.Component {
  // Initial state of the component.
  state = { vote: 0, score: 0 };

  // Method to change the state of the component, which the UI reflects "live".
  vote(type) {
    this.setState(state => ({
      vote: state.vote === type ? 0 : type
    }));
  }

  // How the UI should look based on the state.
  render() {
    const { vote, score } = this.state;
    return (
      <main>
    <div class="voteInfo">
        <button id="upvote"
        className={vote === 1 ? "active" : undefined}
        onClick={() => this.vote(1)}>
			 <FontAwesomeIcon icon={ faGrinHearts } />
		</button></div>
    <div class="voteInfo"><h3>{score + vote}</h3></div>
    <div class="voteInfo"><button id="downvote"
        className={vote === -1 ? "active" : undefined}
        onClick={() => this.vote(-1)}>
			<FontAwesomeIcon icon={ faSadCry } />
		</button></div>
      </main>
    );
  }
}

