import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import authService from "./Auth";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Navbar,
  CardGroup,
} from "react-bootstrap";

const Menu = (props) => {
    const [items, setItems] = React.useState([]);
    const {onAdd}  =props;

  React.useEffect(() => {
    authService.viewAll()
    .then((results)=>{
      setItems(results)
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
         <div key={i} className="menuCard" style={{display: 'flex', flexDirection: 'row', justifyContent: "center", width: "25em"}}>
         <Card className="menuEachCard" style={{ flex: '1'}}>
         <Card.Body>
         <img src= {item.image}/>
         <Card.Title>{item.name}</Card.Title>
         <Card.Text>Description: {item.description}</Card.Text>
         <Card.Text>Price: {item.price}</Card.Text>
         <div>
         <Link style={{ textDecoration: "none", color: "brown" }} to={`/menu/view/${item.id}`}>See Details</Link>
         </div>
         <div>
         <button variant="primary" className="btn btn-outline-secondary" onClick={() => onAdd(item)}> Add To Cart</button>
         </div>
         </Card.Body>
         </Card>
         </div>
       )
     })}
     <footer className="footer">
            <div className="footerOne">
           <h5><strong>CHOTTO BAKERY</strong></h5>
           <h5>Follow Us</h5>
           <a href="https://instagram.com" style={{ textDecoration: "none", color: "brown" }}>📸Instagram</a>
           <a href="https://yelp.com" style={{ textDecoration: "none", color: "brown" }}>☕Yelp</a>
           <a href="https://facebook.com" style={{ textDecoration: "none", color: "brown" }}> 👍Facebook</a>
           <h6>2022 © Chotto Bakery. All rights reserved.</h6>
           
           </div>
        </footer>
     </div>
  )
}

export default Menu;