import React from 'react';
import Slider from "react-slick";


const settings = {

  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // initialSlide: 0
};

export const SliderComponent = React.memo(({ data }) => {
  return (
    <div style={{height: '200px', width: '500px'}}>
      <Slider {...settings}>
        {data.map((cur, i) => <Slide key={i + cur.date} image={cur.url} />)}
      </Slider>
    </div>
  )
});

const Slide = React.memo(({image}) => (
    <img style={{height: '200px', width: '300px'}} src={image} alt="" />
));