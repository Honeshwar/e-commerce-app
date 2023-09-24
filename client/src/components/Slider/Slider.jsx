import React, { useState } from 'react'
import "./Slider.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from '../../utils/constant';
function Slider() {
  const [currSlide , setCurrSlide] = useState(0);//0=define index of data array and its corresponding img

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto-compress&cs-tinysrgb&w=1600", 
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto-compress&cs-tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto-compress&cs-tinysrgb&w=1600",
  ];

  const prevSlide = ()=>{
    setCurrSlide(currSlide === 0?2:(prevS)=>prevS-1);
    //cb use because setState asycn call, when happen we don't know, currSide not update
  }
  const nextSlide = ()=>{
    setCurrSlide(currSlide === 2?0:(prevS)=>prevS+1);
  }
  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currSlide * 100}%)`}}>
        <img src={data[0]} alt="slider" />
        <img src={data[1]} alt="slider" />
        <img src={data[2]} alt="slider" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <AiOutlineArrowLeft/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <AiOutlineArrowRight/>
        </div>
      </div>
    </div>
  )
}

export default Slider
