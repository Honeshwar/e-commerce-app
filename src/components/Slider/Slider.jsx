import React, { useState } from "react";
import "./Slider.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "../../utils/constant";
function Slider() {
  const [currSlide, setCurrSlide] = useState(0); //0=define index of data array and its corresponding img

  const data = [
    "https://res.cloudinary.com/drct1kgjv/image/upload/v1696331011/l7unvl6yoeb2enlj2rml.jpg",
    "https://res.cloudinary.com/drct1kgjv/image/upload/v1696331112/p9w1kswfjz5z8kt4wzv9_19c916.jpg",
    "https://res.cloudinary.com/drct1kgjv/image/upload/v1696331161/yqa8hgzilm2z9l2ylcnc_cb2dad.jpg",
  ];

  const prevSlide = () => {
    setCurrSlide(currSlide === 0 ? data.length - 1 : (prevS) => prevS - 1);
    //cb use because setState asycn call, when happen we don't know, currSide not update
  };
  const nextSlide = () => {
    setCurrSlide(currSlide === data.length - 1 ? 0 : (prevS) => prevS + 1);
  };
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currSlide * 100}%)` }}
      >
        {data.map((imgUrl, index) => (
          <img fetchpriority="high" src={imgUrl} alt="slider" key={index} />
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <AiOutlineArrowLeft />
        </div>
        <div className="icon" onClick={nextSlide}>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Slider;
