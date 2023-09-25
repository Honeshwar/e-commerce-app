import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import { Card } from "../index";
import axios from "axios";

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

  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*", //query for geting media ?populate=*by default strapi don't sent media
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN, //Some synonyms for word bearer in English are holder, or carrier.
            },
          },
        );
        console.log(response);
        if (response.status === 200) {
          setData(response.data.data);
        } else {
          throw new Error(response.message);
        }
      };
      fetchData();
    } catch (err) {
      console.log(err.message);
    }
  }, []);
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
        {data.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default FeaturedProducts;
