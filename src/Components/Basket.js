import React from "react";
import authService from "./Auth";
import StripeCheckout from "react-stripe-checkout";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const addItems = () => {
    authService.loginTest().then((res) => {
      console.log("API", res);
      if (res.user) {
        let items = [];
        cartItems.forEach((item) => {
          items.push({
            quantity: item.quantity,
            product: item._id,
          });
        });
        let data = {
          orderItems: items,
          totalPrice: totalPrice.toFixed(2),
          user: res.user._id,
        };
        console.log("Final Data", data);
        authService.add(data).then((response) => {
          console.log(response);
        });
      }
    });
  };

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  console.log("CART ITEM", cartItems);

  const makePayment = (token) => {
    const body = {
      token,
    };
    const headers = {
      "content-type": "application/json",
    };

    return authService.toPay;
  };

  return (
  <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Cart Items
      <div>{cartItems.length === 0 && <div> Cart is empty</div>}</div>
      </Typography>
      <List disablePadding>
      {cartItems.map((item) => (
        <ListItem key={item.id} sx={{ py:1, px: 0}}>
          <ListItemText primary={item.name}></ListItemText>
          <div>
            <button
              class="btn btn-outline-primary btn-circle"
              onClick={() => onAdd(item)}
              className="add"
            >
              +
            </button>
            <button
              class="btn btn-outline-primary btn-circle"
              onClick={() => onRemove(item)}
              className="remove"
            >
              -
            </button>
          </div>
          <div>
            {item.quantity} x ${item.price}
          </div>
     
      </ListItem>
      ))}
      </List>

      {cartItems.length !== 0 && (
        <div>
          <div>Items Price</div>
          <div>${totalPrice.toFixed(2)}</div>
          <div>
            <strong>Total Price</strong>
          </div>
          <div>${totalPrice.toFixed(2)}</div>
          <StripeCheckout
            stripeKey="pk_test_51Khf6fEwT09Y7GnTBt3fVi7wgocGlfJk8SOD9Pi84gqNCDbmFYqlq9MG07GtvPZ2YkqlZo7jmMCTgp2vlWM00rit00odvi3RTz"
            token={makePayment}
            name="Chotto Bakery"
            description={`Your total is $${totalPrice}`}
          >
            <button className="btn btn-primary btn-sm">Checkout</button>
          </StripeCheckout>
        </div>
      )}
      </React.Fragment>
  )}
