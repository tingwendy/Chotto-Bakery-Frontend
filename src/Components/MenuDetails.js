import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import authService from "./Auth";

const MenuDetails = () => {
    const [details, setDetails] = React.useState({});

  React.useEffect(()=> {
    authService.viewDetails()
    // axios
    //     .get(`http://localhost:5005/menu/view/${itemId}`)
        .then((results) => {
          console.log(results);
          setDetails(results)
        })
        .catch((err) => {
            console.log(err.message);
        });
  }, []);

  return (
    <div className="MenuDetails">
    <h1>Menu Details</h1>
        <div>
        <img src={details.image}/>
        <h2>{details.name}</h2>
        <p>Price: {details.price}</p>
        <p>Contains: {details.contains}</p>
        <p>Storage: {details.storage}</p>
        </div>
   
    {/* })} */}
    </div>
  );
}

export default MenuDetails;