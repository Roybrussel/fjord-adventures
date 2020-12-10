import React from "react";
import "./Reviews.css";
import Carousel from "react-bootstrap/Carousel";

const Reviews = (props) => {
  return (
    <div className="reviews-container">
      <Carousel
        className="reviews-carousel"
        controls={false}
        indicators={false}
      >
        <Carousel.Item interval={4000}>
          <span>
            <i className="fas fa-quote-right"></i>
            <h3>
              My compliments to Fjord Adventures for bringing our first visit to
              Norway to the next level.
            </h3>
            <h5>~ Erlich Bachman</h5>
          </span>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <span>
            <i className="fas fa-quote-right"></i>
            <h3>
              Fjord Adventures did make sure that our trip to Norway was perfect
              in every way possible!
            </h3>
            <h5>~ Ronnie Pickering</h5>
          </span>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <span>
            <i className="fas fa-quote-right"></i>
            <h3>
              One of the best experiences we've ever had! All thanks to Fjord
              Adventures!
            </h3>
            <h5>~ Jian-Yang</h5>
          </span>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
