import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidCartDownload } from "react-icons/bi";
import { MdBalance } from "react-icons/md";

import "./Product.scss";

function Products() {
  const [selectedImage, setSelectedImage] = useState(0); //0= index selected image
  const [quantity, setQuantity] = useState(1);

  const data = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto-compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto-compress&cs-tinysrgb&w=1600&lazy=load",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={data[0]}
            alt={"product"}
            onClick={() => setSelectedImage(0)}
          />
          <img
            src={data[1]}
            alt={"product"}
            onClick={() => setSelectedImage(1)}
          />
        </div>
        <div className="mainImg">
          <img src={data[selectedImage]} alt={"product"} />
        </div>
      </div>
      <div className="right">
        <h1>T-Shirt</h1>
        <span className="price">Rs 999</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          voluptatem reiciendis, dignissimos optio maiores nobis quo magnam
          ratione praesentium saepe nihil libero consectetur soluta quibusdam
          aspernatur non minima atque totam.
        </p>
        <div className="quantity">
          <button
            type="button"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button type="button" onClick={() => setQuantity((prev) => prev + 1)}>
            +
          </button>
        </div>
        <button type="button" className="addToCart">
          <BiSolidCartDownload />
          Add to cart
        </button>
        <div className="link">
          <div className="linkItems">
            <AiOutlineHeart />
            Add to wishlist
          </div>
          <div className="linkItems">
            <MdBalance />
            Add to compare
          </div>
        </div>
        <div className="info">
          <span>Vendor Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tags: T-Shirt, Men, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Products;
