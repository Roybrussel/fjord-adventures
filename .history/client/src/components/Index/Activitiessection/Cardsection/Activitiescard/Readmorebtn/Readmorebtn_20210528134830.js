import React, { useState, useEffect } from "react";
import "./Readmorebtn.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-date-picker";

import ActivityService from "../../../../../../services/activity-service";

function MyVerticallyCenteredModal(props) {
  const [value, onChange] = useState(new Date());
  const [details, setDetails] = useState({});
  const [price, setPrice] = useState(0)
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

  function calculateTotal() {
    var activityPrice = details.price;
    var numberOfPersons = document.getElementById("dropdown").value;
    var totalPrice = activityPrice * numberOfPersons;
    document.getElementsByClassName(
      "total-price"
    ).textContent = `€ ${totalPrice.toString()},-`;
    console.log(`€ ${totalPrice.toString()},-`);
  }

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
            <Row>
              <Col>
                <h6>Area</h6>
                <p>{details.area}</p>
                <h6>Price</h6>
                <p>€ {details.price},- per person</p>
              </Col>
              <Col>
                <h6>Select date</h6>
                <DatePicker
                  onChange={onChange}
                  value={value}
                  minDate={new Date(2021, 5, 1)}
                  maxDate={new Date(2021, 7, 31)}
                />
                <h6 className="number-of-persons-heading">No. of persons</h6>
                <select
                  id="dropdown"
                  className="persons-dropdown"
                  onChange={calculateTotal}
                >
                  <option value="1">1 person</option>
                  <option value="2">2 persons</option>
                  <option value="3">3 persons</option>
                  <option value="4">4 persons</option>
                  <option value="5">5 persons</option>
                  <option value="6">6 persons</option>
                  <option value="7">7 persons</option>
                  <option value="8">8 persons</option>
                  <option value="9">9 persons</option>
                </select>
              </Col>
              <Col>
                <h6>TOTAL PRICE</h6>
                <p className="total-price">€ {price},-</p>
              </Col>
            </Row>
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
