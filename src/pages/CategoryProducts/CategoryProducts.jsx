import React, { useState } from "react";
import "./CategoryProducts.scss";
import { List, Loader } from "../../components";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Category() {
  const categoryId = parseInt(useParams().id);
  const [sortBy, setSortBy] = useState("asc"); //sortby asc,desc,...
  // const range = useRef(1500); //0 to upto maximum  price prooduct
  // range.current = 1500;
  // const [maxPrice, setmaxPrice] = useState(1500); //0 to upto maximum  price prooduct
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
    `/categories/${categoryId}?populate=*`, // to get caterory by id , get data , so we can use to set banner,title
  );
  const selectSubCategoryHandler = (e) => {
    let subCatId = e.target.value;
    let isChecked = e.target.checked; // boolean but in html on string something
    setSelectSubCategory(
      isChecked
        ? [...selectSubCategory, subCatId]
        : selectSubCategory.filter((item) => item !== subCatId),
    );
  };
  // //prize range handler
  // const prizeRangeHandler = (e) => {
  //   //without re-render change range
  //   range.current = e.target.value;
  //   // setmaxPrice(e.target.value);
  //   delayTaskHandler(e.target.value);
  // };

  // const delayTaskHandler = debounce(setmaxPrice, 1000);
  // // Debounce function
  // function debounce(expensiveFnCallCb, delay) {
  //   let timeoutId; //closure help stored

  //   return function (...args) {
  //     // If there's a setTimeout in progress, cancel it
  //     if (timeoutId) {
  //       clearTimeout(timeoutId); //previous action/input ignore
  //     }

  //     // Schedule a new setTimeout
  //     timeoutId = setTimeout(() => {
  //       expensiveFnCallCb.apply(this, args); //args pass kar sake in exp func,apply call fun and bind this
  //     }, delay);
  //   };
  // }

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
                <div className="inputItems" key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onClick={selectSubCategoryHandler}
                  />
                  <label htmlFor={item.id}>{item.attributes?.title}</label>
                </div>
              ))}
              {!data ||
                (data?.length === 0 && (
                  <span>There is no subCategories for this category!</span>
                ))}
            </div>
            {/* <div className="filterItems">
              <h2>Filter By Price</h2>
              <div className="inputItems range">
                <span>0</span>
                <input
                  type="range"
                  min={0}
                  max={10000}
                  defaultValue={100}
                  onChange={prizeRangeHandler}
                  ref={range}
                />
                <span>{range.current}</span>
              </div>
            </div> */}
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
            {/* {maxPrice === range.current && ( */}
            <List
              categoryId={categoryId}
              sortBy={sortBy}
              // maxPrice={maxPrice}
              selectedSubCategory={selectSubCategory}
            />
            {/* )} */}
          </div>
        </>
      )}
    </div>
  );
}

export default Category;
