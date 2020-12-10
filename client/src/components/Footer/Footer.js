import React from "react";
import "./Footer.css";
import Fjords from "./Fjords/Fjords";
import Credits from "./Credits/Credits";

const Footer = (props) => {
  return (
    <footer>
      <Fjords />
      <Credits />
    </footer>
  );
};

export default Footer;
