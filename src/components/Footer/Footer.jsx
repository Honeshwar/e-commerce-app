import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Loading/Loader";
import "./Footer.scss";

function Footer({ categories,error,loading }) {
  return (
    // not take wrapper because margin not padding inner things
    <div className="footer" id="footer">
      <div className="top">
        <div className="items">
          <h1>Category</h1>
          { error ? (
             "Something went wrong"
              ) : loading ? (
                <Loader />
              ) : (categories?.map((category) => (
            <div key={category.id} className={"item"}>
              <span>{category.attributes?.title}</span>
            </div>
          )))
          }
        </div>
        <div className="items">
          <h1>Links</h1>
          <div className="item">
            <span>FAQ</span>
          </div>
          <div className="item">
            <span>Pages</span>
          </div>
          <div className="item">
            <span>Store</span>
          </div>
          <div className="item">
            <span>Compare</span>
          </div>
          <div className="item">
            <span>Cookies</span>
          </div>
        </div>
        <div className="items">
          <h1>About</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            velit et reprehenderit voluptatum inventore dolore, error alias
            nulla nam fugit labore natus nobis facilis voluptates dolores quae
            placeat aliquam iusto!
          </p>
        </div>
        <div className="items">
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            fugit odit numquam amet, tenetur quis cupiditate odio magni eum
            alias reprehenderit cumque officiis quisquam maxime inventore
            laboriosam ex? Libero, eligendi!
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <Link className="links" to="/">HoneshwarStore</Link>
          &copy; Copyright 2023. All Rights Reserved
        </div>
        <div className="right">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOvxzjx_nCE6SNCOEZOPzV-KolqmJWjyDzOw&usqp=CAU"
            alt="payment"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
