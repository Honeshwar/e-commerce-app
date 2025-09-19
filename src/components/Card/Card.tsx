import type { ApiResponse, Product } from "../../hooks/types/useFetch.types";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ item }: { item: ApiResponse<Product> }) {
  return (
    <Link to={`/product/${item.id}`} className="links">
      <div className="card">
        {item.attributes?.isNew && (
          <span className="new-season">New Season</span>
        )}
        <div className="images">
          <img
            src={item.attributes?.img?.data?.attributes?.formats?.small?.url} //optional conditing use full api data, undefined.undefined stop before it, stop when var undefine chain stop
            alt={item.attributes?.title}
            className="primary"
          />
          <img
            src={item.attributes?.img2?.data?.attributes?.formats?.small?.url}
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
