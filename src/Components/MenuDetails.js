import React from "react";
import axios from "axios";

const MenuDetails = () => {
    const [items, setItems] = React.useState([]);

  const getItemInfo = (itemId) => {
      axios
        .get(`http://localhost:5005/menu/view/${itemId}`)
        .then((results) => {
            console.log(results.data);
        })
        .catch((err) => {
            console.log(err.message);
        });
  };
  
  return (
    <div className="MenuDetails">
    <h1>Menu Details</h1>
     {items.map((item, i) => {
       console.log("each item", item);
       return(
         <div key={i}>
         <h3>{item.name}</h3>
         <p>{item.description}</p>
         <p>{item.price}</p>
         {/* <Link to="/d">About</Link> */}
         <button onClick={() => getItemInfo(item._id)}> Details </button>
         </div>
       )
     })}
    </div>
  );
}

export default MenuDetails;