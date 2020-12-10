import React, { useState, useEffect } from "react";
import "./Areafilter.css";
import Filteritem from "./Filteritem/Filteritem";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";

function createFilterItem(area) {
  return <Filteritem area={area.area} />;
}

const Areafilter = (props) => {
  const [listOfActivities, setListOfActivities] = useState([]);

  const getAllActivities = () => {
    axios
      .get("http://localhost:9999/activities")
      .then((responseFromApi) => {
        console.log(responseFromApi);
        setListOfActivities(responseFromApi.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(getAllActivities, []);

  return (
    <div className="filter-component">
      <DropdownButton
        menuAlign="right"
        title="Filter"
        id="dropdown-menu-align-right"
        className="filter-btn"
      >
        {listOfActivities.map(createFilterItem)}
      </DropdownButton>
    </div>
  );
};

export default Areafilter;
