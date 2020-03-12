import React, { useState, useEffect } from "react";

function Search(props) {

    return (
        <div>
            <input
                type="text"
                value={props.searchTerm}
            //onChange={e => setSearchInput(e.target.value)}
            />{" "}
            <button onClick={props.searchQuery}>Search</button>
        </div>
    );
}

export default Search;
