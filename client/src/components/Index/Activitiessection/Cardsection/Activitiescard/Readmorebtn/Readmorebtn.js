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

  //   function to delete the project
  const deleteActivity = () => {
    // get the 'id' from url via 'props.match.params' object
    const { id } = props;

    const service = new ActivityService();

    // api call to the delete route in the backend
    service
      .removeActivity(id)
      .then(() => {
        // after submitting the form, 'props.history.push' can be used to redirect to 'projects'
        props.history.push("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="add-btn">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form>
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
            <Button variant="primary" type="submit">
              Book
            </Button>
            <Button variant="primary" type="submit">
              Edit
            </Button>
            <Button
              variant="danger"
              type="submit"
              onClick={() => deleteActivity(details.id)}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Form>
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
          className="btn btn-primary add-btn"
          onClick={() => setModalShow(true)}
        >
          Read more
        </button>
        <MyVerticallyCenteredModal
          show={modalShow}
          id={props.id}
          onHide={() => setModalShow(false)}
        />
      </>
    </div>
  );
};

export default Readmorebtn;
