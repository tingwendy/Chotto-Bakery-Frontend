import React from "react";
import axios from "axios";
import authService from "./Auth";

function CustomOrder () {
    const [user, setUser] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [pickUpTime, setPickUpTime] = React.useState("");
    const [productNeededBy, setProductNeededBy] = React.useState("");
    const [typeOfProduct, setTypeOfProduct] = React.useState("");
    const [quantityNeeded, setQuantityNeeded] = React.useState(0);
    const [description, setDescription] = React.useState("");
    const [foodAllergies, setFoodAllergies] = React.useState("");
    

    function createCustomOrder (e) {
        e.preventDefault();
        authService.customOrder({
                    user: user,
                    phone: phoneNumber,
                    pickUpTime: pickUpTime,
                    productNeededBy: productNeededBy,
                    typeOfProduct: typeOfProduct,
                    quantityNeeded: quantityNeeded,
                    description: description,
                    foodAllergies: foodAllergies,
            })
            .then((results) => {
                console.log("new custom order:", results.data)
            })
            .catch((err) => console.log(err));
    }


    return (
    <div>
        <h3>Please fill out the form below to receive a quote for custom orders</h3>
        <form onSubmit = {createCustomOrder}>
            <label htmlFor="user">Full Name</label>
            <input
            name="user name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
            name="phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
             <label htmlFor="pickUpTime">Pick up time</label>
            <input
            name="pick up time"
            value={pickUpTime}
            onChange={(e) => setPickUpTime(e.target.value)}
            />
             <label htmlFor="productNeededBy">Pick up date</label>
            <input
            name="pick up date"
            type="date"
            value={productNeededBy}
            onChange={(e) => setProductNeededBy(e.target.value)}
            />
             <label htmlFor="typeOfProduct">Type of product</label>
            <input
            name="type of product"
            value={typeOfProduct}
            onChange={(e) => setTypeOfProduct(e.target.value)}
            />
             <label htmlFor="quantityNeeded">Quantity needed</label>
            <input
            name="quantity needed"
            value={quantityNeeded}
            onChange={(e) => setQuantityNeeded(e.target.value)}
            />
             <label htmlFor="description">Description/Design</label>
            <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
             <label htmlFor="foodAllergies">Food allergies</label>
            <input
            name="food allergies"
            value={foodAllergies}
            onChange={(e) => setFoodAllergies(e.target.value)}
            />
            <button onClick={(e) => createCustomOrder(e)}>Submit</button>
        </form>
    </div>
    );
};

export default CustomOrder;