import React from "react";
import "./Searchbar.css";

const Searchbar = (props) => {
  return (
    <div className="container search-bar-container">
      <div className="search-bar">
        <div className="location search-option border-right">
          <p>AREA</p>
        </div>
        <div className="date search-option">
          <p>DATE</p>
        </div>
        <button className="search-btn search-option">
          <i className="fas fa-search"></i> SEARCH
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
