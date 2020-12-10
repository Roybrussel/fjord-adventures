import React from "react";
import "./Activities.css";
import Header from "../Header/Header";
import Activitiessection from "../../Index/Activitiessection/Activitiessection";
import Footer from "../../Footer/Footer";

const Activities = () => {
  return (
    <div>
      <Header />
      <div className="activities-container">
        <Activitiessection />
      </div>
      <Footer />
    </div>
  );
};

export default Activities;
