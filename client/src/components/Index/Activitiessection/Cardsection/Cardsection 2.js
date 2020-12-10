import React, { useState, useEffect } from "react";
import "./Cardsection.css";
import Activitiescard from "./Activitiescard/Activitiescard";
import Addformbtn from "../Addformbtn/Addformbtn";
import ActivityService from "../../../../services/activity-service";

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

  // Function to help get all projects from the backend
  const getAllActivities = () => {
    const service = new ActivityService();

    service
      .getProjects()
      .then((responseFromApi) => {
        setListOfProjects(responseFromApi.data);
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
