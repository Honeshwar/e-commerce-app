import React, { useState } from "react";
import "./CategoryProducts.scss";
import { List } from "../../components";
import { useParams } from "react-router-dom";

function Category() {
  const id = parseInt(useParams().id);
  const [selectSubCategory, setSelectSubCategory] = useState([]); //sub cat store as collection
  const [sortBy, setSortBy] = useState(null); //sortby asc,desc,...
  const [maxPrice, setmaxPrice] = useState(100); //0 to upto maximum  price prooduct

  const selectSubCategoryHandler = (subCategory) => {
    setSelectSubCategory((pS) => [...pS, subCategory]);
  };
  return (
    <div className="categoryProducts">
      <div className="left">
        <div className="filterItems">
          <h2>Product Categories</h2>
          <div className="inputItems">
            <input
              type="checkbox"
              id="shoes"
              name="productType"
              value="shoes"
              onClick={() => selectSubCategoryHandler("shoes")}
            />
            <label htmlFor="shoes">shoes</label>
          </div>
          <div className="inputItems">
            <input
              type="checkbox"
              id="hat"
              name="productType"
              value="hat"
              onClick={() => selectSubCategoryHandler("hat")}
            />{" "}
            {/*productTpe=shoes&productType=hat send to server , each server differently behave mostly key=productType and duplicate value array store */}
            <label htmlFor="hat">hat</label>
            {/* use labeling and focusing on click */}
          </div>
        </div>
        <div className="filterItems">
          <h2>Filter By Price</h2>
          <div className="inputItems">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              defaultValue={100}
              onChange={(e) => setmaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItems">
          <h2>Sort By</h2>
          <div className="inputItems">
            <input
              type="radio"
              id="low"
              name="price"
              onClick={() => setSortBy("asc")}
            />
            <label htmlFor="low">low</label>
          </div>
          <div className="inputItems">
            <input
              type="radio"
              id="high"
              name="price"
              onClick={() => setSortBy("desc")}
            />
            <label htmlFor="high">high</label>
            {/* use labeling and focusing on click */}
          </div>
        </div>
      </div>
      <div className="right">
        <div className="categoryImage">
          <img
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="category "
          />
        </div>
        {/* category related list */}
        <List
          categoryId={id}
          sortBy={sortBy}
          maxPrice={maxPrice}
          selectedSubCategory={selectSubCategory}
        />
      </div>
    </div>
  );
}

export default Category;
