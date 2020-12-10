import React, { useState, useEffect } from "react";
import "./Cardsection.css";
import Activitiescard from "./Activitiescard/Activitiescard";
import Addformbtn from "../Addformbtn/Addformbtn";
import axios from "axios";

function createCard(activity) {
  return (
    <Activitiescard
      imageUrl={activity.imageUrl}
      title={activity.title}
      description={`${activity.description.slice(0, 185)}... `}
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
      <Addformbtn />
      <div className="row">{listOfActivities.map(createCard)}</div>
    </div>
  );
};

export default Cardsection;
