// React Router
import { Link } from "react-router-dom";

// Components
import Loader from "../Loading/Loader";

// Styles
import "./Footer.scss";

// Types
import type { Categories } from "../../hooks/types/useFetch.types";

function Footer({
  categories,
  error,
  loading,
}: {
  categories: Categories[] | null;
  error: boolean;
  loading: boolean;
}) {
  return (
    // not take wrapper because margin not padding inner things
    <div className="footer" id="footer">
      <div className="top">
        <div className="items">
          <h1>Category</h1>
          {error ? (
            "Something went wrong"
          ) : loading ? (
            <Loader />
          ) : (
            categories?.map((category) => (
              <div key={category.id} className={"item"}>
                <a href={`/category-products/${category.id}`}>{category.attributes?.title}</a>
              </div>
            ))
          )}
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
            An ecommerce business uses digital methods to sell products and
            services to customers. Ecommerce businesses can be online-only or
            have a physical presence as well. Selling to customers online
            typically requires a website or digital storefront, plus a way to
            process payments digitally and ship orders to customers.
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
          <Link className="links" to="/">
            HoneshwarStore
          </Link>
          &copy; Copyright 2026. All Rights Reserved
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
