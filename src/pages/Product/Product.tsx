// React core
import { useState } from "react";

// Redux
import { useDispatch } from "react-redux";

// React Router
import { useParams } from "react-router-dom";

// Components
import { Loader } from "../../components";

// Hooks
import useFetch from "../../hooks/useFetch";

// Redux actions
import { addToCart } from "../../redux/cartReducer";

// Icons & constants
import {
  AiOutlineHeart,
  BiSolidCartDownload,
  MdBalance,
} from "../../utils/constant";

// Styles
import "./Product.scss";

// Notifications
import { toast } from "react-toastify";

// Types
import type { ApiResponse, Product } from "../../hooks/types/useFetch.types";

function Products() {
  const prodId = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img"); //key name store in state for comp use
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch<ApiResponse<Product>>(
    `/products/${prodId}?populate=*`
  );
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: data?.id,
        desc: data?.attributes?.desc,
        price: data?.attributes?.price,
        img: data?.attributes?.img?.data?.attributes?.formats?.thumbnail?.url,
        quantity: quantity,
      })
    );
    toast.success(
      `Added ${quantity} ${quantity === 1 ? "product" : "products"}`
    );
  };

  return (
    <div className="product">
      {error ? (
        "Something went wrong"
      ) : loading ? (
        <Loader />
      ) : (
        // data && (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  data?.attributes?.img?.data?.attributes?.formats?.thumbnail
                    ?.url ??
                  "https://cdn.pixabay.com/animation/2025/09/08/20/09/20-09-10-49_512.gif"
                }
                alt={"product"}
                onClick={() => setSelectedImage("img")}
              />
              <img
                src={
                  data?.attributes?.img2?.data?.attributes?.formats?.thumbnail
                    ?.url ??
                  "https://cdn.pixabay.com/animation/2025/09/08/20/09/20-09-10-49_512.gif"
                }
                alt={"product"}
                onClick={() => setSelectedImage("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  data?.attributes[selectedImage as "img" | "img2"]?.data
                    ?.attributes?.formats?.small?.url ??
                  "https://cdn.pixabay.com/animation/2025/09/08/20/09/20-09-10-49_512.gif"
                }
                alt={"product"}
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">Rs {data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                type="button"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button
                type="button"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="addToCart"
              onClick={addToCartHandler}
            >
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
            {/* <div className="info">
              <span>{data?.attributes?.title ?? "No Title"}</span>
              <span>Product Type: {data?.attributes?.type ?? "No Type"}</span>
              <span>Tags: {data?.attributes?.sub_categories?.data?.map((tag) => tag.attributes?.title).join(", ") ?? "No Tags"}</span>
            </div> */}
            <hr />
            <div className="info">
              {/* <span>DESCRIPTION</span>
               <span>{data?.attributes?.desc ?? "No Description"}</span>
              <hr /> */}
              <span>ADDITIONAL INFORMATION</span>
              <span>Product Type: {data?.attributes?.type ?? "No Type"}</span>
              <span>category: {data?.attributes?.categories?.data?.map((tag) => tag.attributes?.title).join(", ") ?? "No Category"}</span>
              <span>sub category: {data?.attributes?.sub_categories?.data?.map((tag) => tag.attributes?.title).join(", ") ?? "No Sub Category"}</span>
              {/* <span>{data?.attributes?.additionalInfo ?? "No Additional Info"}</span> */}
              <hr />
              <span>FAQ</span>
              {/* data?.attributes?.faqs ?? */}
              <span>{"No FAQ"}</span>
            </div>
          </div>
        </>
        // )
      )}
    </div>
  );
}

export default Products;
