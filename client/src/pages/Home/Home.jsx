import React from "react";
import {
  Slider,
  FeaturedProducts,
  Categories,
  Contact,
} from "../../components";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type={"featured"} />
      <Categories />
      <FeaturedProducts type={"trending"} />
      <Contact />
    </div>
  );
}

export default Home;
