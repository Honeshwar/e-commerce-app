import React, { useState } from "react";
import "./CategoryProducts.scss";
import { List, Loader } from "../../components";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Category() {
  const categoryId = parseInt(useParams().id);
  const [sortBy, setSortBy] = useState("asc"); //sortby asc,desc,...
  const [maxPrice, setmaxPrice] = useState(1500); //0 to upto maximum  price prooduct
  const [selectSubCategory, setSelectSubCategory] = useState([]); //sub cat store as collection

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${categoryId}
    `, // sub categ title /name get to fill in filter of category page
  );
  const {
    data: category,
    error: categoryError,
    loading: categoryLoading,
  } = useFetch(
    `/categories/${categoryId}?populate=*`, // sub categ title /name get to fill in filter of category page
  );
  console.log("category", category);
  const selectSubCategoryHandler = (e) => {
    // console.log(e);
    let subCatId = e.target.value;
    let isChecked = e.target.checked; // boolean but in html on string something
    setSelectSubCategory(
      isChecked
        ? [...selectSubCategory, subCatId]
        : selectSubCategory.filter((item) => item !== subCatId),
    );
  };

  return (
    <div className="categoryProducts">
      {error ? (
        "Something went wrong"
      ) : loading ? (
        <Loader />
      ) : (
        <>
          <div className="left">
            <div className="filterItems">
              <h2>Product Categories</h2>
              {data?.map((item) => (
                <div className="inputItems">
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onClick={selectSubCategoryHandler}
                  />
                  <label htmlFor={item.id}>{item.attributes?.title}</label>
                </div>
              ))}
            </div>
            <div className="filterItems">
              <h2>Filter By Price</h2>
              <div className="inputItems">
                <span>0</span>
                <input
                  type="range"
                  min={0}
                  max={10000}
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
              {categoryError ? (
                "Something went wrong"
              ) : categoryLoading ? (
                <Loader />
              ) : (
                <div
                  className="categoryBannerImg"
                  style={{
                    backgroundImage: `url(${category?.attributes?.bannerImg?.data?.attributes?.formats?.small?.url})`,
                  }}
                >
                  {" "}
                </div>
              )}
            </div>
            {/* category related list */}
            <List
              categoryId={categoryId}
              sortBy={sortBy}
              maxPrice={maxPrice}
              selectedSubCategory={selectSubCategory}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Category;
