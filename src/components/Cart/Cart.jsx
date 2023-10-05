import React, { useState } from "react";
import "./Cart.scss";
import { AiFillDelete } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
// import makeRequestAPI from "../../utils/makeRequestAPI";
import axios from "axios";

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products); // state={cart:{products:[]}}
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2); //ef rs 123.00
  };
  const [paymentOnProgreess, setPaymentOnProgress] = useState(false);

  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  const stripePromise = loadStripe(process.env.STRIPE_PUBLISABLE_KEY);
  const handlePayment = async () => {
    if (!products || products?.length === 0) {
      return;
    }
    setPaymentOnProgress(true);
    try {
      const stripe = await stripePromise;
      //it return by a controller that we make in order folder in strapi
      const res = await axios.post(process.env.REACT_APP_API_URL + "/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id, //it return by a controller that we make in order folder in strapi
      });
    } catch (error) {
      console.log(error);
    }
    setPaymentOnProgress(false);
  };
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      <div className="cartList">
        {products.map((item) => (
          <div className="cartItem" key={item.id}>
            <div className="left">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="center">
              <h4>{item.title}</h4>
              <p>{item.desc?.substring(0, 50)}...</p>
              <span>
                {item.quantity} x &#8377;{item.price}
              </span>
            </div>
            <div
              className="right"
              onClick={() => dispatch(removeItem({ id: item.id }))}
            >
              <AiFillDelete />
            </div>
          </div>
        ))}
        {products.length === 0 && <span>Cart is empty!</span>}
      </div>
      <div className="total">
        <span>SUBTOTAL</span>
        <span>&#8377;{totalPrice()}</span>
      </div>
      <button type="button" className="checkout" onClick={handlePayment}>
        {paymentOnProgreess ? "Proceeding....." : " PROCEED TO CHECKOUT"}
      </button>
      <span className="remove" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}

export default Cart;
