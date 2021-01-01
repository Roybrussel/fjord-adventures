import React, { useState, useEffect } from "react";
import "./Cardslider.css";
import Explorecard from "./Explorecard/Explorecard";
import ActivityService from "../../../../services/activity-service";

const Cardslider = (props) => {
  const [listOfActivities, setListOfActivities] = useState([]);

  const getAllActivities = () => {
    const service = new ActivityService();

    service
      .getActivities()
      .then((responseFromApi) => {
        setListOfActivities(responseFromApi.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(getAllActivities, []);

  function createCard(area) {
    return <Explorecard image={`images/${area}.jpg`} title={area} />;
  }

  const uniqueListOfActivities = [
    ...new Set(listOfActivities.map((x) => x.area)),
  ];

  return (
    <div className="cards-container">
      <div className="row">{uniqueListOfActivities.map(createCard)}</div>
    </div>
  );
};

export default Cardslider;
