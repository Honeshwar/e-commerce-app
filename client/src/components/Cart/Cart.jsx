import React from 'react'
import './Cart.scss'
import {AiFillDelete} from "../../utils/constant";
function Cart() {
    const items = [
      {
        id: 1,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600", 
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb&w=1600" ,
        title: "Long Sleeve Graphic T-shirt",
        isNew:true,
        oldPrice: 19,
        price: 12,
        desc:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium aliquid commodi consectetur, cum veritatis alias quidem rem, officiis ad soluta ab dolorum accusantium sint corporis vitae veniam suscipit? Fuga, earum."
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs-tinysrgb&w=1600", 
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb&w=1600" ,
        title: "Coat",
        isNew:true,
        oldPrice: 19,
        price: 12,
        desc:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium aliquid commodi consectetur, cum veritatis alias quidem rem, officiis ad soluta ab dolorum accusantium sint corporis vitae veniam suscipit? Fuga, earum."
    },
    ];

  return (
    <div className="cart">
        <h1>Products in your cart</h1>
        <div className="cartList">
            {items.map((item)=>(
                <div className="cartItem" key={item.id}>
                  <div className="left">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="center">
                    <h4>{item.title}</h4>
                    <p>{item.desc?.substring(0,50)}...</p>
                    <span>1 x &#8377;{item.price}</span>
                  </div>
                  <div className="right">
                    <AiFillDelete/>
                  </div>
                </div>
            ))}
        </div>
        <div className="total">
          <span>SUBTOTAL</span>
          <span>&#8377;999</span>
        </div>
        <button type='button' className='checkout'>PROCEED TO CHECKOUT</button>
        <span className="remove">Reset Cart</span>
    </div>
  )
}

export default Cart