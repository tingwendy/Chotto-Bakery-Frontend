import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/cart.png";

export default function Header(props) {
    return(
    <div>
           <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
           <img className="cartImage" src= {cart} alt="cartImage"/>
           </Link> {' '}
            {props.countCartItems ? (
                <button class="btn btn-outline-secondary btn-sm">{props.countCartItems}</button>
            ) : (
                ' '
            )}
    </div>
    )
}