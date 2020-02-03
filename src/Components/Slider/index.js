import React, { useState } from 'react';
import Carousel from 'nuka-carousel';
import { observer } from "mobx-react";

import * as S from './styled';


export const SliderComponent = observer(({ data, cfg }) => {
  console.log('render COMPONENT SLIDER')
  const renderSlides = data => data.map((cur, i) => {
    return <Slide key={i + cur.date} image={cur.url} />
  })
  return (
    <S.SliderWrapper>
      <Carousel {...cfg}>
      {renderSlides(data)}
      </Carousel>
    </S.SliderWrapper>
  )
});

const Slide = React.memo(({image}) => (
  <div>
    <img style={{height: '200px', width: '300px'}} src={image} alt="" />
  </div>
));