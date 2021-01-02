import React, { useState, useEffect } from "react";
import "./Readmorebtn.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import ActivityService from "../../../../../../services/activity-service";

function MyVerticallyCenteredModal(props) {
  const [details, setDetails] = useState({});
  const { id } = props;

  const getSingleActivity = () => {
    // get the 'id' from url via 'props.match.params' object

    const service = new ActivityService();

    // api call to the server to retrieve a single object
    service
      .getOneActivity(id)
      .then((responseFromApi) => {
        setDetails(responseFromApi.data);
      })
      .catch((error) => console.error(error));
  };

  // useEffect to mimic componentDidMount(). It'll get run anytime there is any change to the props.match.params value coming in.
  useEffect(getSingleActivity, [id]);

  return (
    <div className="add-btn">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {details.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Image className="activity-img" src={details.imageUrl} alt="" />
          </Form.Group>
          <Form.Group>
            <h6>Description</h6>
            <p className="description-text">{details.description}</p>
          </Form.Group>
          <Form.Group>
            <h6>Area</h6>
            <p>{details.area}</p>
          </Form.Group>
          <Form.Group>
            <h6>Price</h6>
            <p>€ {details.price},- per person</p>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="custom" type="submit">
            Book
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const Readmorebtn = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="add-btn-container">
      <>
        <button
          className="btn btn-primary readmore-btn"
          onClick={() => setModalShow(true)}
        >
          Read more
        </button>
        <MyVerticallyCenteredModal
          show={modalShow}
          id={props.id}
          onHide={() => {
            setModalShow(false);
          }}
        />
      </>
    </div>
  );
};

export default Readmorebtn;
