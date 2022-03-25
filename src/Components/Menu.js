import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = (props) => {
    const [items, setItems] = React.useState([]);
    const {onAdd}  =props;

  React.useEffect(() => {
    axios.get('http://localhost:5005/menu/view-all')
    .then((results)=>{
      setItems(results.data)
    })
    .catch((err)=>{
      console.log(err.message);
    }); 
  }, []);

  // const getItemInfo = (itemId) => {
  //     axios
  //       .get("http://localhost:5005/menu/view/" + itemId)
  //       .then((results) => {
  //           console.log(results.data);
  //       })
  //       .catch((err) => {
  //           console.log(err.message);
  //       });
  // };
  
  return (
    <div className="Menu">
    <h1>Menu</h1>
     {items.map((item, i) => {
       console.log("each item", item);
       return(
         <div key={i}>
         <h3>{item.name}</h3>
         <p>{item.description}</p>
         <p>{item.price}</p>
         {/* <button onClick={() => getItemInfo(item._id)}>Details</button> */}
         <Link to={`/menu/view/${item._id}`}>Details</Link>
         <button onClick={() => onAdd(item)}> Add To Cart</button>
         </div>
       )
     })}
    </div>
  );
}

export default Menu;