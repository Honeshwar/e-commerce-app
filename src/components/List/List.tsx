import { Card } from "..";
import type { ApiResponse, Product } from "../../hooks/types/useFetch.types";
import useFetch from "../../hooks/useFetch";
import "./List.scss";

function List({
  categoryId,
  selectedSubCategory,
  maxPrice = 999999,
  sortBy,
}: {
  categoryId: number;
  selectedSubCategory: string[];
  maxPrice?: number;
  sortBy: string;
}) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${categoryId}${selectedSubCategory.map(
      (subCatId) => `&[filters][sub_categories][id][$eq]=${subCatId}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sortBy}`
  ); // sub categ title /name get to fill in filter of category page

  return (
    <div className="list">
      {error
        ? "Something went wrong"
        : loading
        ? "loading"
        : (data as ApiResponse<Product>[])?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
      {(data as ApiResponse<Product>[])?.length === 0 && (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCkfQGx2QwjHqzXbpXPdWN4JaDHV0NuUtsXvWbCc&s"
          style={{ margin: "auto" }}
          alt="no product found"
        />
      )}
    </div>
  );
}

export default List;
