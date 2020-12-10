import React from "react";
import "./Activitiescard.css";
import Readmorebtn from "./Readmorebtn/Readmorebtn";

const Activitiescard = (props) => {
  return (
    <div className="col-md-4 explore-card-container">
      <div>
        <img className="activities-card-img-top" src={props.imageUrl} alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <Readmorebtn />
        </div>
      </div>
    </div>
  );
};

export default Activitiescard;
