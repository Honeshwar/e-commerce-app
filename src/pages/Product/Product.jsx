import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Loader } from "../../components";
import useFetch from "../../hooks/useFetch";
import { addToCart } from "../../redux/cartReducer";
import {
  AiOutlineHeart,
  BiSolidCartDownload,
  MdBalance,
} from "../../utils/constant";
import "./Product.scss";

function Products() {
  const prodId = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img"); //key name store in state for comp use
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${prodId}?populate=*`);
  const dispatch = useDispatch();
  
  return (
    <div className="product">
      {error
          ? "Something went wrong"
          : loading
          ? <Loader/>
          :
           <>
            <div className="left">
              <div className="images">
                <img
                  src={
                    
                    data?.attributes?.img?.data?.attributes?.formats?.thumbnail?.url
                  }
                  alt={"product"}
                  onClick={() =>
                    setSelectedImage("img"
                    )
                  }
                />
                <img
                  src={
                    
                    data?.attributes?.img2?.data?.attributes?.formats?.thumbnail?.url
                  }
                  alt={"product"}
                  onClick={() =>
                    setSelectedImage(
                  "img2"
                    )
                  }
                />
              </div>
              <div className="mainImg">
                <img
                  src={
                  
                        data?.attributes[selectedImage]?.data?.attributes?.formats?.small?.url
                  }
                  alt={"product"}
                />
              </div>
            </div>
            <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">Rs {data?.attributes?.price}</span>
            <p>
            {data?.attributes?.desc}
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
            <button type="button" className="addToCart" onClick={()=>dispatch(addToCart({
              id:data?.id,
              desc:data?.attributes?.desc,
              price:data?.attributes?.price,
              img:data?.attributes?.img?.data?.attributes?.formats?.thumbnail?.url,
              quantity:quantity
            }))}>
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
          </>
          }
    </div>
  );
}

export default Products;
