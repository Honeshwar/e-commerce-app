import React from 'react'
import {Slider, FeaturedProducts, Categories, Contact} from '../../components';
import "./Home.scss";


function Home() {
  return (
    <div className="home">
      <Slider/>
      <FeaturedProducts type={"Featured"}/>
      <Categories/>
      <FeaturedProducts type={"Trending"}/>
      <Contact/>
    </div>
  )
}

export default Home