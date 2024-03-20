'use client'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// 충돌 원인
import '@/app/(loggedIn)/_component/slickPost.scss'
import '@/app/(loggedIn)/_component/slickPostPagination.scss'

const PostFormSlider = ({ children }) => {

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slickPost slickPostPagination">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default PostFormSlider;