import React from "react";
import axios from "axios";
import authService from "./Auth";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Navbar,
} from "react-bootstrap";

function CustomOrder() {
  const [user, setUser] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [pickUpTime, setPickUpTime] = React.useState("");
  const [productNeededBy, setProductNeededBy] = React.useState("");
  const [typeOfProduct, setTypeOfProduct] = React.useState("");
  const [quantityNeeded, setQuantityNeeded] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const [foodAllergies, setFoodAllergies] = React.useState("");
  const [image, setImage] = React.useState("");

  function createCustomOrder(e) {
    e.preventDefault();
    authService
      .customOrder({
        user: user,
        phone: phoneNumber,
        pickUpTime: pickUpTime,
        productNeededBy: productNeededBy,
        typeOfProduct: typeOfProduct,
        quantityNeeded: quantityNeeded,
        description: description,
        foodAllergies: foodAllergies,
        image: image,
      })
      .then((results) => {
        console.log("new custom order:", results.data);
      })
      .catch((err) => console.log(err));
  }
  console.log("IMAGE", image);
  function handleFileUpload(e) {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    authService
      .handleUpload(uploadData)
      .then((response) => {
        // console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        setImage(response.path);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  }

  return (
    <div>
      <h3>
        Please fill out the form below to receive a quote for custom orders
      </h3>
      <form onSubmit={createCustomOrder}>
        <div class="form-group">
          <label htmlFor="user" class="col-sm-2 col-form-label">
            Full Name
          </label>
          <input
            name="user name"
            value={user}
            class="form-control-md"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label htmlFor="phoneNumber" class="col-sm-2 col-form-label">
            Phone Number
          </label>
          <input
            name="phone number"
            value={phoneNumber}
            class="form-control-md"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label htmlFor="pickUpTime" class="col-sm-2 col-form-label">
            Pick up time
          </label>
          <input
            name="pick up time"
            value={pickUpTime}
            onChange={(e) => setPickUpTime(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label htmlFor="productNeededBy" class="col-sm-2 col-form-label">
            Pick up date
          </label>
          <input
            name="pick up date"
            type="date"
            value={productNeededBy}
            onChange={(e) => setProductNeededBy(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label htmlFor="typeOfProduct" class="col-sm-2 col-form-label">
            Type of product
          </label>
          <input
            name="type of product"
            value={typeOfProduct}
            onChange={(e) => setTypeOfProduct(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label htmlFor="quantityNeeded" class="col-sm-2 col-form-label">
            Quantity needed
          </label>
          <input
            name="quantity needed"
            value={quantityNeeded}
            onChange={(e) => setQuantityNeeded(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label htmlFor="description" class="col-sm-2 col-form-label">
            Description/Design
          </label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label htmlFor="foodAllergies" class="col-sm-2 col-form-label">
            Food allergies
          </label>
          <input
            name="food allergies"
            value={foodAllergies}
            onChange={(e) => setFoodAllergies(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label htmlFor="designUpload" class="col-sm-2 col-form-label">
            Upload a design
          </label>
          <input
            name="image"
            type="file"
            onChange={(e) => handleFileUpload(e)}
          />
        </div>
        <button
          class="btn btn-outline-dark"
          onClick={(e) => createCustomOrder(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CustomOrder;
