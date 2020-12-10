import React, { useState } from "react";
import "./Addformbtn.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UploadService from "../../../../services/upload-service";
import ActivityService from "../../../../services/activity-service";

const initialState = {
  title: "",
  description: "",
  area: "",
  price: 0,
  imageUrl: "",
};

function MyVerticallyCenteredModal(props) {
  const [formState, setFormState] = useState(initialState);

  const service = new UploadService();

  // Function handler for input changes in the form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  // Function to uploading a file
  const handleFileUpload = (event) => {
    // Creates a new FormData object that will take the file upload data
    const uploadData = new FormData();
    uploadData.append("imageUrl", event.target.files[0]);

    // upload the data to cloudinary
    service
      .upload(uploadData)
      .then((response) => {
        // The response from uploading to cloudinary is the url which will be saved in the database.
        setFormState({ ...formState, imageUrl: response.cloudinaryUrl });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  // Function handler for form submission
  const handleFormSubmit = (event) => {
    // Prevent default form action
    event.preventDefault();

    // Extract values to use with axios call
    const { title, description, area, price, imageUrl } = formState;

    const service = new ActivityService();

    // Make api call to the backend to save form data
    service
      .createActivity({ title, description, area, price, imageUrl })
      .then(() => {
        props.getData();
        setFormState(initialState);
        props.history.push("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="add-btn">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={handleFormSubmit}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Activity
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <h6>Title</h6>
              <Form.Control
                type="text"
                name="title"
                value={formState.title}
                onChange={handleInputChange}
                placeholder="Title of activity"
                maxlength="25"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <h6>Description</h6>
              <Form.Control
                as="textarea"
                name="description"
                value={formState.description}
                onChange={handleInputChange}
                rows={3}
                minlength="185"
                maxlength="1500"
                required
              />
              <p className="form-text">
                A minimum of 185 characters is required
              </p>
            </Form.Group>
            <Form.Group>
              <h6>Area</h6>
              <Form.Control
                type="text"
                name="area"
                value={formState.area}
                onChange={handleInputChange}
                placeholder="Area of activity"
                maxlength="20"
                required
              />
            </Form.Group>
            <Form.Group>
              <h6>Price</h6>
              <Form.Control
                type="number"
                name="price"
                value={formState.price}
                onChange={handleInputChange}
                placeholder="Price in euros"
                required
              />
            </Form.Group>
            <Form.Group>
              <h6>Upload image</h6>
              <Form.File
                type="file"
                id="exampleFormControlFile1"
                name="imageUrl"
                onChange={handleFileUpload}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            {formState.imageUrl ? (
              <Button variant="primary" type="submit" closeButton>
                Submit
              </Button>
            ) : (
              <Button disabled variant="primary" type="submit" closeButton>
                Submit
              </Button>
            )}
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

const Addformbtn = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
        className="btn btn-primary add-btn"
        onClick={() => setModalShow(true)}
      >
        Add
      </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Addformbtn;
