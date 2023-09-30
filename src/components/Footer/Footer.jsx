import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    // not take wrapper because margin not padding inner things
    <div className="footer">
        <div className="top">
          <div className="items">
            <h1>Category</h1>
            <div><span>Women</span></div>
            <div><span>Men</span></div>
            <div><span>Shoes</span></div>
            <div><span>Accessories</span></div>
            <div><span>New Arrivals</span></div>
          </div>
          <div className="items">
            <h1>Links</h1>
            <div><span>FAQ</span></div>
            <div><span>Pages</span></div>
            <div><span>Store</span></div>
            <div><span>Compare</span></div>
            <div><span>Cookies</span></div>
          </div>
          <div className="items">
            <h1>About</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit velit et reprehenderit voluptatum inventore dolore, error alias nulla nam fugit labore natus nobis facilis voluptates dolores quae placeat aliquam iusto!</p>
          </div>
          <div className="items">
            <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores fugit odit numquam amet, tenetur quis cupiditate odio magni eum alias reprehenderit cumque officiis quisquam maxime inventore laboriosam ex? Libero, eligendi!</p>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span>HoneshwarStore</span>
            &copy; Copyright 2023. All Rights Reserved
          </div>
          <div className="right">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOvxzjx_nCE6SNCOEZOPzV-KolqmJWjyDzOw&usqp=CAU" alt="payment" />
          </div>
        </div>
      
    </div>
  )
}

export default Footer