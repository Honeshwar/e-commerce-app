import React from 'react'
import {Slider, FeaturedProducts} from '../../components';
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Slider/>
      <FeaturedProducts type={"Featured"}/>
      <FeaturedProducts type={"Trending"}/>
    </div>
  )
}

export default Home