import React from "react";
import "./Searchbar.css";

const Searchbar = (props) => {
  return (
    <div className="container search-bar-container">
      <div className="search-bar">
        <div className="location search-option border-right">
          <p>LOCATION</p>
        </div>
        <div className="date search-option">
          <p>DATE</p>
        </div>
        <div className="search-btn search-option">
          <p>
            <i className="fas fa-search"></i> SEARCH
          </p>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
