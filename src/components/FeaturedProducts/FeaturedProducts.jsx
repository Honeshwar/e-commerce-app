import "./FeaturedProducts.scss";
import { Card, Loader } from "../index";
import useFetch from "../../hooks/useFetch";

function FeaturedProducts(params) {
  // current static data ,after/badma api get karage
  // const items = [
  //     {
  //         id: 1,
  //         img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
  //         img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb&w=1600" ,
  //         title: "Long Sleeve Graphic T-shirt",
  //         isNew:true,
  //         oldPrice: 19,
  //         price: 12,
  //     },
  //     {
  //         id: 2,
  //         img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs-tinysrgb&w=1600",
  //         img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb&w=1600" ,
  //         title: "Coat",
  //         isNew:true,
  //         oldPrice: 19,
  //         price: 12,
  //     },
  //     {
  //         id: 3,
  //         img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //         img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb&w=1600" ,
  //         title: "Skirt",
  //         oldPrice: 19,
  //         price: 12,
  //     },
  //     {
  //         id: 4,
  //         img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto-compress&cs=tinysrgb&w=1600",
  //         img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb&w=1600" ,
  //         title: "Hat",
  //         oldPrice: 19,
  //         price: 12,},{id:2,},{id:3,}
  // ];
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${params.type}`,
  );
  // useFetch is an async func/hook no need to make it async
  //it is hook that change reconcilation throught not each re-render
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{params.type} Products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quos
          at quia ducimus laboriosam maiores qui facilis necessitatibus, dolor
          sint perferendis ipsum repellendus esse delectus in incidunt
          consequatur eligendi corrupti.
        </p>
      </div>
      <div className="bottom">
        {error ? (
          "Something went wrong"
        ) : loading ? (
          <Loader />
        ) : (
          data?.map((item) => {
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
