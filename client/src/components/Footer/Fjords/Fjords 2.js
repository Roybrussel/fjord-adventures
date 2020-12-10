import React from "react";
import "./Fjords.css";

const Fjords = (props) => {
  return (
    <div className="fjord-container">
      <img
        src="images/fjordmt-left.svg"
        className="fjordleft-img"
        alt="fjord-left-img"
      />
      <img
        src="images/fjordmt-right.svg"
        className="fjordright-img"
        alt="fjord-right-img"
      />
    </div>
  );
};

export default Fjords;
