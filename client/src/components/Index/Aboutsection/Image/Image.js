import React from "react";
import "./Image.css";

const Image = (props) => {
  return (
    <div className="col-sm-6 about-img-container">
      <img src="images/trolltunga.jpg" className="about-img" alt="about-img" />
    </div>
  );
};

export default Image;
