import React from "react";
import authService from "./Auth";
import axios from "axios";
import EditCustomOrder from "./EditCustomOrder";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = React.useState({});
  const [custom, setCustom] = React.useState([]);
  const [deleteCustom, setDeleteCustom] = React.useState([]);

  React.useEffect(() => {
    authService
      .loginTest()
      //    axios
      //     .get("http://localhost:5005/api/auth/loggedIn")
      .then((results) => {
          console.log("RESULTS", results);
        setUser(results.user);
        console.log(results);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  React.useEffect(() => {
      authService
      .viewCustomOrder()
      .then((results) => {
        console.log("CUSTOM ORDER", results);
      setCustom(results);
      console.log(results);
    })
    .catch((err) => {
      console.error(err.message);
    });
  }, []);

  React.useEffect(()=> {
    authService
    .deleteCustomOrder()
    .then((results) => {
      console.log("DELTED CUSTOM ORDER", results);
      setDeleteCustom(results);
    })
    .catch((err) => {
      console.error(err.message);
    });
  }, []);

  return (
    <div>
       {<h3>{user.username}'s profile page</h3>}
               <h4>Custom Orders</h4>
       {custom.map((custom, i) => {
           console.log("custom order is", custom);
           return(
               <div key={i}>
               <p>Type of product: {custom.typeOfProduct}</p>
               <p>Quantity needed: {custom.quantityNeeded}</p>
               <p>Phone Number: {custom.phone}</p>
               <p>Product pick up date: {custom.productNeededBy}</p>
               <p>Pick up time requested: {custom.pickUpTime}</p>
               <img src= {custom.image}/>
               <Link style={{ textDecoration: "none", color: "brown" }} to={`/custom/edit/${custom._id}`}>Edit Custom Order</Link>
               {/* <button href="#" onClick={() =>  deleteCustom(custom._id) }>Delete</button> */}
               </div>
           )
       })}
    </div>
  )

}
export default Profile;
