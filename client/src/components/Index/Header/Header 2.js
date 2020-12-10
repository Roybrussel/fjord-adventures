import React from "react";
import "./Header.css";
import Navbar from "./Navbar/Navbar";
import Searchbar from "./Searchbar/Searchbar";
import Reviews from "./Reviews/Reviews";

const Header = (props) => {
  return (
    <header className="background-container">
      <Navbar {...props} />
      <Searchbar />
      <Reviews />
    </header>
  );
};

export default Header;
