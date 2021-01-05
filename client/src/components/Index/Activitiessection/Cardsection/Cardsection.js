import React, { useState, useEffect } from "react";
import "./Cardsection.css";
import Activitiescard from "./Activitiescard/Activitiescard";
import ActivityService from "../../../../services/activity-service";
// import Areafilter from "../Areafilter/Areafilter";

function createCard(activity) {
  return (
    <Activitiescard
      imageUrl={activity.imageUrl}
      title={activity.title}
      description={`${activity.description.slice(0, 185)}... `}
      id={activity._id}
      key={activity._id}
    />
  );
}

const Cardsection = (props) => {
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

  return (
    <div className="cards-container">
      <div className="btn-container">{/* <Areafilter /> */}</div>
      <div className="row">{listOfActivities.map(createCard)}</div>
    </div>
  );
};

export default Cardsection;
