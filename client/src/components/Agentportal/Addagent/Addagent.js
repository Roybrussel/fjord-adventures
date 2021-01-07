import React from "react";
import "./Addagent.css";
import Header from "../Header/Header";
import Heading from "./Heading/Heading";
import Addagentform from "../Addagent/Addagentform/Addagentform";
import Footer from "../../Footer/Footer";

const Addagent = () => {
  return (
    <div>
      <Header />
      <Heading />
      <Addagentform />
      <Footer />
    </div>
  );
};

export default Addagent;
