import React from "react";
import "./Index.css";
import Header from "./Header/Header";
import Exploresection from "./Exploresection/Explorsection";
import Aboutsection from "./Aboutsection/Aboutsection";
import Activitiessection from "./Activitiessection/Activitiessection";
import Footer from "../Footer/Footer";

const Index = (props) => {
  return (
    <div>
      <Header {...props} />
      <Exploresection />
      <Aboutsection />
      <Activitiessection />
      <Footer />
    </div>
  );
};

export default Index;
