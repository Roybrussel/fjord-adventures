import React, { useState, useEffect } from "react";
import "./Cardslider.css";
import Explorecard from "./Explorecard/Explorecard";
import axios from "axios";

function createCard(area) {
  return <Explorecard image={`images/${area.area}.jpg`} title={area.area} />;
}

const Cardslider = (props) => {
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
    <div className="cards-container">
      <div className="row">{listOfActivities.map(createCard)}</div>
    </div>
  );
};

export default Cardslider;
