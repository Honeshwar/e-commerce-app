import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://res.cloudinary.com/drct1kgjv/image/upload/v1696056436/small_pexels_photo_818992_2f32855c0c.jpg"
            alt="category"
          />
          <button>
            <Link className="links" to="/category-products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://res.cloudinary.com/drct1kgjv/image/upload/v1696056435/small_pexels_photo_2036646_0d27decb4b.jpg"
            alt="category"
          />
          <button>
            <Link to="/category-products/1" className="links">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://res.cloudinary.com/drct1kgjv/image/upload/v1696056295/small_pexels_photo_1813947_21a85c41cd.jpg"
            alt="category"
          />
          <button>
            <Link to="/category-products/1" className="links">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-large">
        <div className="row">
          {/* first row have 2 col,each col have one row */}
          <div className="col">
            <div className="row">
              <img
                src="https://res.cloudinary.com/drct1kgjv/image/upload/v1696056436/small_pexels_photo_1192609_42998c4e0a.jpg"
                alt="category"
              />
              <button>
                <Link to="/category-products/1" className="links">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://res.cloudinary.com/drct1kgjv/image/upload/v1696056436/small_pexels_photo_2703202_437bf46b0b.jpg"
                alt="category"
              />
              <button>
                <Link to="/category-products/1" className="links">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://res.cloudinary.com/drct1kgjv/image/upload/v1696056436/small_pexels_photo_1159670_8b0ddf3a3d.jpg"
            alt="category"
          />
          <button>
            <Link to="/category-products/1" className="links">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
