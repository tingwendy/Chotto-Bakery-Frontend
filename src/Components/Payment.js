import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const[stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token);
    };

    React.useEffect(()=> {
        const makeRequest = async () => {
            console.log("STRIPE TOKEN", stripeToken);
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/checkout/payment`, {
                    tokenId: stripeToken.id,
                    amount: 1000,
                    }
                );
                console.log(res.data);
            } catch(err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, navigate]);

    return (
        <div>
            <StripeCheckout
                name="Chotto Bakery"
                billingAddress
                shippingAddress
                description="Your total is $ "
                amount={1000}
                token={onToken}
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
            >
            </StripeCheckout>
        </div>
    )
}

export default Payment;