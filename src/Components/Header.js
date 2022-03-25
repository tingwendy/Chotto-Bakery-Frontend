import React from "react";

export default function Header(props) {
    return(
    <div>
        <a href="">
            Cart{' '}
            {props.countCartItems ? (
                <button>{props.countCartItems}</button>
            ) : (
                ' '
            )}
        </a>{' '}
    </div>
    )
}