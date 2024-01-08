import React, { useState } from "react";
import "./Cart.scss";
import { AiFillDelete } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
// import makeRequestAPI from "../../utils/makeRequestAPI";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const stripePromise = loadStripe(
    "pk_test_51NvFMgSFOJk2h94TRB7FjIF3JFMTgALdvuINjMDyLt7aZyNcBSZiO0hLaSqMb11RQcrC646SHEFwhvL33LpwH4LZ00wUMQ7dxK",
  );
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
      }); // validate orders and create stripe session at server and stripe session provide for payment, also payment methods,shipping country set. after payment where to redirect or failed payment
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
              onClick={() => {
                dispatch(removeItem({ id: item.id }));
                toast.success("Successfully Removed!");
              }}
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
      <span
        className="remove"
        onClick={() => {
          if (products?.length > 0) {
            dispatch(resetCart());
            toast.success("Successfully Removed All!");
          }
        }}
      >
        Reset Cart
      </span>
    </div>
  );
}

export default Cart;
