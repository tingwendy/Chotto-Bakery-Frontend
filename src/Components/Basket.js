import React from "react";
import authService from "./Auth";
import StripeCheckout from "react-stripe-checkout";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
></link>;

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
    <aside>
      <h3>Cart Items</h3>
      <div>{cartItems.length === 0 && <div> Cart is empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
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
        </div>
      ))}

      {cartItems.length !== 0 && (
        <div>
          <div>Items Price</div>
          <div>${totalPrice.toFixed(2)}</div>
          <div>
            <strong>Total Price</strong>
          </div>
          <div>${totalPrice.toFixed(2)}</div>
          <button class="btn btn-primary btn-sm" onClick={addItems}>
            Checkout
          </button>
          <StripeCheckout
            stripeKey="pk_test_51Khf6fEwT09Y7GnTBt3fVi7wgocGlfJk8SOD9Pi84gqNCDbmFYqlq9MG07GtvPZ2YkqlZo7jmMCTgp2vlWM00rit00odvi3RTz"
            token={makePayment}
            name="Chotto Bakery"
            description={`Your total is $${totalPrice}.00`}
          >
            <button className="btn-large pink">Buy ME</button>
          </StripeCheckout>
        </div>
      )}
    </aside>
  );
}
