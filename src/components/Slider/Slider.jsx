import React, { useState } from "react";
import "./Slider.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "../../utils/constant";
function Slider() {
  const [currSlide, setCurrSlide] = useState(0); //0=define index of data array and its corresponding img

  const data = [
    "https://res.cloudinary.com/drct1kgjv/image/upload/v1704802465/dnaswbhzzxanorslhzst.jpg",
    "http://res.cloudinary.com/drct1kgjv/image/upload/v1704802464/kzomnkphcraet9tcu7xa.jpg",
    "http://res.cloudinary.com/drct1kgjv/image/upload/v1704802457/bnj6ph3r0vflhddqfzo4.jpg",
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
