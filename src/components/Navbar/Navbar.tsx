// React hook for managing state in functional components
import { useState } from "react";

// React Router component for creating links to other routes
import { Link } from "react-router-dom";

// Icons used in the application
import {
  // MdKeyboardArrowDown,
  // BsSearch,
  // BiUserCircle,
  // AiOutlineHeart,
  AiOutlineShoppingCart,
} from "../../utils/constant";

// Sass (SCSS + CSS preprocessor) styles for the Navbar component
import "./Navbar.scss";

// Cart component used in the Navbar
import { Cart } from "..";

// React Redux hook for accessing the Redux store state
import { useSelector } from "react-redux";

// Type definitions for the Redux store state
import type { ReduxStateType } from "../../redux/types/globals.types";

// Type definitions for the useFetch hook
import type { Categories } from "../../hooks/types/useFetch.types";

function Navbar({
  categories,
  error,
  loading,
}: {
  categories: Categories[] | null;
  error: boolean;
  loading: boolean;
}) {
  const [openCart, setOpenCart] = useState(false);
  const products = useSelector((state: ReduxStateType) => state.cart.products);

  const totalProductsInCart = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity));
    return total; //ef rs 123.00
  };
  return (
    <div className="navbar">
      {/* for padding */}
      <div className="wrapper">
        {/* <div className="left">
          <div className="items">
            <img
              src="https://freesvg.org/storage/img/thumb/Flag-of-India.png"
              alt="flag"
            />
            <MdKeyboardArrowDown />
          </div>
          <div className="items">
            <span>INR</span>
            <MdKeyboardArrowDown />
          </div>

          {error
            ? "Something went wrong"
            : loading
            ? "Loading..."
            : categories?.map((category) => (
                <div className="items" key={category.id}>
                  <Link
                    key={category.id}
                    className="links"
                    to={`/category-products/${category.id}`}
                  >
                    {category.attributes.title}
                  </Link>
                </div>
              ))}
        </div> */}
        <div className="center">
          <h1 className="brand-name">
            <Link to="/" className="links">
              HoneshwarSTORE
            </Link>
          </h1>
        </div>
        <div className="right">
          <div className="navigation-links">
            <div className="items">
              <Link className="links" to={"/"}>
                Homepage
              </Link>
            </div>
            {/* <div className="items">
              <Link className="links" to={"/about"}>
                About
              </Link>
            </div> */}
            <div className="items">
              <Link className="links" to={"#footer"}>
                Contact Us
              </Link>
            </div>
          </div>
          {error
            ? "Something went wrong"
            : loading
            ? "Loading..."
            : categories?.map((category) => (
                <div className="items" key={category.id}>
                  <Link
                    key={category.id}
                    className="links"
                    to={`/category-products/${category.id}`}
                  >
                    {category.attributes.title}
                  </Link>
                </div>
              ))}
          <div className="icons">
            {/* <div className="items">
              <BsSearch />
            </div>
            <div className="items">
              <BiUserCircle />
            </div>
            <div className="items">
              <AiOutlineHeart />
            </div> */}
            <div className="items" onClick={() => setOpenCart((p) => !p)}>
              <AiOutlineShoppingCart />
              <span>{totalProductsInCart()}</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
}

export default Navbar;
