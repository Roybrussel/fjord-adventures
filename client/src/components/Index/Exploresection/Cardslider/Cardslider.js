import React, { useState, useEffect } from "react";
import "./Cardslider.css";
import Explorecard from "./Explorecard/Explorecard";
import ActivityService from "../../../../services/activity-service";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cardslider = (props) => {
  const [listOfActivities, setListOfActivities] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

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
      <div className="container cards-row">
        <Slider {...settings}>{uniqueListOfActivities.map(createCard)}</Slider>
      </div>
    </div>
  );
};

export default Cardslider;
