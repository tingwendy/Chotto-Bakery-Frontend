import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MenuDetails = () => {
    const [details, setDetails] = React.useState({});
    const {itemId} = useParams();
    console.log("ITEMID", itemId);

  React.useEffect(()=> {
    axios
        .get(`http://localhost:5005/menu/view/${itemId}`)
        .then((results) => {
          console.log(results.data);
          setDetails(results.data)
        })
        .catch((err) => {
            console.log(err.message);
        });
  }, []);

  return (
    <div className="MenuDetails">
    <h1>Menu Details Page</h1>
    <h1>{details.name}</h1>
    <p>{details.price}</p>
    </div>
  
  );
}

export default MenuDetails;