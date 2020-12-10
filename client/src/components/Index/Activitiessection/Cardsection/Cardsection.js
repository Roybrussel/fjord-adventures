import React, { useState, useEffect } from "react";
import "./Cardsection.css";
import Activitiescard from "./Activitiescard/Activitiescard";
import Addformbtn from "../Addformbtn/Addformbtn";
import Areafilter from "../Areafilter/Areafilter";
import axios from "axios";

function createCard(activity) {
  return (
    <Activitiescard
      imageUrl={activity.imageUrl}
      title={activity.title}
      description={`${activity.description.slice(0, 185)}... `}
      id={activity._id}
    />
  );
}

const Cardsection = (props) => {
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
      <div className="btn-container">
        <Addformbtn />
        <Areafilter />
      </div>
      <div className="row">{listOfActivities.map(createCard)}</div>
    </div>
  );
};

export default Cardsection;
