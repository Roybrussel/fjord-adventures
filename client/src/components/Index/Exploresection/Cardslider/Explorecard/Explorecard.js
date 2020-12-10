import React from "react";
import "./Explorecard.css";

const Explorecard = (props) => {
  return (
    <div className="col-md-3">
      <div>
        <img className="explore-card-img-top" src={props.image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default Explorecard;
