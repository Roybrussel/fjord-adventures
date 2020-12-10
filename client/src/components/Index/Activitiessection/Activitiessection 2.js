import React from "react";
import "./Activitiessection.css";
import Heading from "./Heading/Heading";
import Cardsection from "./Cardsection/Cardsection";

const Activitiessection = (props) => {
  return (
    <section id="activities-section" className="container">
      <Heading />
      <Cardsection />
    </section>
  );
};

export default Activitiessection;
