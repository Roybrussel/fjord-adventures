import React from "react";
import "./Activities.css";
import Header from "../Header/Header";
import Heading from "./Heading/Heading";
import Cardsection from "./Cardsection/Cardsection";
import Footer from "../../Footer/Footer";

const Activities = (props) => {
  return (
    <div>
      <Header />
      <section id="activities-section" className="container">
        <Heading />
        <Cardsection />
      </section>
      <Footer />
    </div>
  );
};

export default Activities;
