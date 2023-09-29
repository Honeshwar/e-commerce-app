import React from 'react'
import './Cart.scss'
import {AiFillDelete} from "../../utils/constant";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import makeRequest from '../../utils/makeRequest';


function Cart() {
    // const items = [
    //   {
    //     id: 1,
    //     img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600", 
    //     img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb&w=1600" ,
    //     title: "Long Sleeve Graphic T-shirt",
    //     isNew:true,
    //     oldPrice: 19,
    //     price: 12,
    //     desc:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium aliquid commodi consectetur, cum veritatis alias quidem rem, officiis ad soluta ab dolorum accusantium sint corporis vitae veniam suscipit? Fuga, earum."
    // },
    // {
    //     id: 2,
    //     img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs-tinysrgb&w=1600", 
    //     img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb&w=1600" ,
    //     title: "Coat",
    //     isNew:true,
    //     oldPrice: 19,
    //     price: 12,
    //     desc:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium aliquid commodi consectetur, cum veritatis alias quidem rem, officiis ad soluta ab dolorum accusantium sint corporis vitae veniam suscipit? Fuga, earum."
    // },
    // ];
    
    const dispatch = useDispatch();
    const products = useSelector(state=>state.cart.products);// state={cart:{products:[]}}
    const totalPrice = ()=>{
      let total = 0;
      products.forEach(item => total += item.quantity * item.price);
      return total.toFixed(2);//ef rs 123.00
    }

    const handlePayment = async ()=>{
      // Make sure to call `loadStripe` outside of a component’s render to avoid
      // recreating the `Stripe` object on every render.
      const stripePromise = loadStripe("pk_test_51NvFMgSFOJk2h94TRB7FjIF3JFMTgALdvuINjMDyLt7aZyNcBSZiO0hLaSqMb11RQcrC646SHEFwhvL33LpwH4LZ00wUMQ7dxK");

      try {
        const stripe = await stripePromise;
        //it return by a controller that we make in order folder in strapi
        const res = await makeRequest.post("/orders",{
          products,
        });
        await stripe.redirectToCheckout({
          sessionId:res.data.stripeSession.id,//it return by a controller that we make in order folder in strapi
        })
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className="cart">
        <h1>Products in your cart</h1>
        <div className="cartList">
            {products.map((item)=>(
                <div className="cartItem" key={item.id}>
                  <div className="left">
                    <img src={process.env.REACT_APP_API_UPLOAD_URL + item.img} alt={item.title} />
                  </div>
                  <div className="center">
                    <h4>{item.title}</h4>
                    <p>{item.desc?.substring(0,50)}...</p>
                    <span>{item.quantity} x &#8377;{item.price}</span>
                  </div>
                  <div className="right" onClick={()=>dispatch(removeItem({id:item.id}))}>
                    <AiFillDelete/>
                  </div>
                </div>
            ))}
            {products.length === 0 && <span>Cart is empty!</span>}
        </div>
        <div className="total">
          <span>SUBTOTAL</span>
          <span>&#8377;{totalPrice()}</span>
        </div>
        <button type='button' className='checkout' onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className="remove" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart