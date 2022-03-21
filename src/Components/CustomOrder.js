import React from "react";
import axios from "axios";

const CustomOrder = (props) => {
    const [user, setuser] = React.useState("");
    const [phoneNumber, setphoneNumber] = React.useState("");
    const [pickUpTime, setpickUpTime] = React.useState("");
    const [productNeededBy, setproductNeededBy] = React.useState("");
    const [typeOfProduct, settypeOfProduct] = React.useState("");
    const [quantityNeeded, setquantityNeeded] = React.useState(0);
    const [description, setdescription] = React.useState("");
    const [foodAllergies, setfoodAllergies] = React.useState("");
    

    const createCustomOrder = (e) => {
        e.preventDefault();
        props.createCustomOrder({
            user: user,
            phoneNumber: phoneNumber,
            pickUpTime: pickUpTime,
            productNeededBy: productNeededBy,
            typeOfProduct: typeOfProduct,
            quantityNeeded: quantityNeeded,
            description: description,
            foodAllergies: foodAllergies,
        });
        setuser("");
        phoneNumber("");
        pickUpTime("");
        productNeededBy("");
        typeOfProduct("");
        quantityNeeded("");
        description("");
        foodAllergies("");
        

    };


    return (
    <div>
        <h3>Please fill out the form below to receive a quote for custom orders</h3>
        <form>
            <label htmlFor="user">Full Name</label>
            <input
            name="user name"
            value={user}
            onChange={(e) => setuser(e.target.value)}
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
            name="phone number"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            />
             <label htmlFor="pickUpTime">Pick up time</label>
            <input
            name="pick up time"
            value={pickUpTime}
            onChange={(e) => setpickUpTime(e.target.value)}
            />
             <label htmlFor="productNeededBy">Pick up date</label>
            <input
            name="pick up date"
            type="date"
            value={productNeededBy}
            onChange={(e) => setproductNeededBy(e.target.value)}
            />
             <label htmlFor="typeOfProduct">Type of product</label>
            <input
            name="type of product"
            value={typeOfProduct}
            onChange={(e) => settypeOfProduct(e.target.value)}
            />
             <label htmlFor="quantityNeeded">Quantity needed</label>
            <input
            name="quantity needed"
            value={quantityNeeded}
            onChange={(e) => setquantityNeeded(e.target.value)}
            />
             <label htmlFor="description">Description/Design</label>
            <textarea
            name="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            />
             <label htmlFor="foodAllergies">Food allergies</label>
            <input
            name="food allergies"
            value={foodAllergies}
            onChange={(e) => setfoodAllergies(e.target.value)}
            />
            <button onClick={(e) => createCustomOrder(e)}>Submit</button>
        </form>
    </div>
    );
};

export default CustomOrder;