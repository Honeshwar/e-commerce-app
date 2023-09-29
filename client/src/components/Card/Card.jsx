import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ item }) {
  console.log(
    process.env.REACT_APP_API_UPLOAD_URL +
      item.attributes?.img?.data?.attributes?.url,
  );
  return (
    <Link to={`/product/${item.id}`} className="links">
      <div className="card">
        {item.attributes?.isNew && (
          <span className="new-season">New Season</span>
        )}
        <div className="images">
          <img
            src={
              process.env.REACT_APP_API_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            } //optional conditing use full api data, undefined.undefined stop before it, stop when var undefine chain stop
            alt={item.attributes?.title}
            className="primary"
          />
          <img
            src={
              process.env.REACT_APP_API_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt={item.attributes?.title}
            className="secondary"
          />
        </div>
        <h3>{item.attributes?.title}</h3>
        <div className="prices">
          <span> &#8377; {item.attributes?.oldPrice || "599"}</span>
          <span> &#8377; {item.attributes?.price}</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
