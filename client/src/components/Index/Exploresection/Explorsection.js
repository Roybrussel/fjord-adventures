import React from "react";
import "./Exploresection.css";
import Heading from "./Heading/Heading";
import Cardslider from "./Cardslider/Cardslider";

const Exploresection = (props) => {
  return (
    <section id="explore-section">
      <div className="container">
        <Heading />
      </div>
      <div className="cardslider-container">
        <Cardslider />
      </div>
    </section>
  );
};

export default Exploresection;
