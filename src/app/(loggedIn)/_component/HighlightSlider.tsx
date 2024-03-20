'use client'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slickHighlight.scss' // 충돌 원인

const HighlightSlider = ({ children }) => {

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3
  };

  return (
    <div className="highlightSlider">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default HighlightSlider;