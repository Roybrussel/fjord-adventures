import React from "react";
import "./Explorecard.css";

const Explorecard = (props) => {
  return (
    <div className="explore-card">
      <img className="explore-card-img-top" src={props.image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
      </div>
    </div>
  );
};

export default Explorecard;
