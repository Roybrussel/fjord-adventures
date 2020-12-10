import React from "react";
import "./Aboutsection.css";
import Content from "./Content/Content";
import Image from "./Image/Image";

const Topsection = (props) => {
  return (
    <section id="about-section">
      <div className="container">
        <div className="row">
          <Content />
          <Image />
        </div>
      </div>
    </section>
  );
};

export default Topsection;
