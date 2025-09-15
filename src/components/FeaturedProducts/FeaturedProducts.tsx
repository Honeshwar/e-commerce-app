// Styles
import "./FeaturedProducts.scss";

// Components
import { Card, Loader } from "../index";

// Hooks
import useFetch from "../../hooks/useFetch";

// Types
import type { ApiResponse, Product } from "../../hooks/types/useFetch.types";

function FeaturedProducts(params: { type: string }) {
  const { data, loading, error } = useFetch<ApiResponse<Product>[]>(
    `/products?populate=*&[filters][type][$eq]=${params.type}`
  );
  // useFetch is an async func/hook no need to make it async
  //it is hook that change reconcilation throught not each re-render
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{params.type} Products</h1>
        <p>
          It typically includes the product features and benefits, highlighting
          why a visitor should consider making a purchase. A good product
          description also includes specifications like shape, size, dimensions
          and other relevant parameters that can help the online shopper
          visualise the product better.
        </p>
      </div>
      <div className="bottom">
        {error ? (
          "Something went wrong, render is on sleep mode!"
        ) : loading ? (
          <Loader />
        ) : (
          (data ?? [])?.map((item) => {
            return <Card item={item} key={item.id} />;
          })
        )}
        {data?.length === 0 && (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCkfQGx2QwjHqzXbpXPdWN4JaDHV0NuUtsXvWbCc&s"
            style={{ margin: "auto" }}
            alt="no product found"
          />
        )}
      </div>
    </div>
  );
}

export default FeaturedProducts;
