import React, { useState } from 'react';
// import Carousel from 'nuka-carousel';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { observer } from "mobx-react";


import * as S from './styled';


export const SliderComponent = observer(({ data, cfg, setLoadedSlides }) => {
  // console.log('render COMPONENT SLIDER', data, cfg, setLoadedSlides);
  const renderSlides = data => data.map((cur, i) => {
    const setLoaded = (value) => {
      setLoadedSlides(i, value);
    }
    return <Slide
      key={i + cur.date}
      data={cur}
      setLoaded={setLoaded}
      index={i}
      activeIndex={cfg.slideIndex}
    />
  })
  return (
    <S.SliderWrapper>
      <Carousel
        clickToChange
        slidesPerPage={2}
        centered>
      {renderSlides(data)}
      </Carousel>
    </S.SliderWrapper>
  )
});

const Slide = React.memo(({data, setLoaded, activeIndex, index}) => {
  return (
    <S.Slide>
      <S.Image
        src={data.url}
        alt=""
        onLoad={() => setLoaded(true)}
      />
    </S.Slide>
  )
});

// function setDisplay(activeIndex, index) {
//   if (activeIndex === index || activeIndex === index + 1 || activeIndex === index - 1
//     || activeIndex === index + 2 || activeIndex === index - 2) {
//     return true;
//   }
//   return false;
// }