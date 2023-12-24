import React from "react";
import Slider from "react-slick";

import ban1 from "../../../assets/images/banner.jpg";
import ban2 from "../../../assets/images/bannr.jpg";
import ban3 from "../../../assets/images/banner-02.webp";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
      
        <div >
          <img src={ban1} alt="avatar" className="" />
        
        </div>
      </div>
     
      <div>
       
        <div>
          <img src={ban3} alt="avatar" />
          
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
