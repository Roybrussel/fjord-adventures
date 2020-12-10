import React from "react";
import "./Filteritem.css";
import Dropdown from "react-bootstrap/Dropdown";

const Filteritem = (props) => {
  return <Dropdown.Item className="filter-item">{props.area}</Dropdown.Item>;
};

export default Filteritem;
