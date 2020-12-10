import React from "react";
import "./Exploresection.css";
import Heading from "./Heading/Heading";
import Cardslider from "./Cardslider/Cardslider";

const Exploresection = (props) => {
  return (
    <section id="explore-section" className="container">
      <Heading />
      <Cardslider />
    </section>
  );
};

export default Exploresection;
