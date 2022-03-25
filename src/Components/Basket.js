import React from "react";

export default function Basket (props) {
    const {cartItems, onAdd, onRemove} = props;
    
    const totalPrice = cartItems.reduce((a, c)=> a+c.price * c.quantity, 0);
    return (
        <aside>
            <h3>Cart Items</h3>
            <div>{cartItems.length === 0 && <div> Cart is empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id}>
                <div>{item.name}</div>
                <div>
                    <button onClick={()=>onAdd(item)} className="add">
                        +
                    </button>
                    <button onClick={() =>onRemove(item)} className="remove">
                        -
                    </button>
                </div>
                <div>
                    {item.quantity} x ${item.price.toFixed(2)}
                </div>
                </div>
            ))}

            {cartItems.length !==0 &&(
                <div>
                    <div>Items Price</div>
                    <div>${totalPrice.toFixed(2)}</div>
                    <div><strong>Total Price</strong></div>
                    <div>${totalPrice.toFixed(2)}</div>
                    <button onClick={() => alert("checkout!")}>
                        Checkout
                    </button>
                </div>
            )}
        </aside>
    )
}