import React, { useMemo, useState } from 'react';
import Carousel from 'nuka-carousel';
import { observer } from "mobx-react";
import { DotsLoader } from '../DotsLoader'


import * as S from './styled';


export const SliderComponent = observer(({ data, cfg, setLoadedSlides }) => {
  // console.log('render COMPONENT SLIDER', data, cfg, setLoadedSlides);
  const renderSlides = () => data.map((cur, i) => {
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
  // const renderSlidesMemo = useMemo(() => renderSlides(), [data.length])
  return (
    <S.SliderWrapper>
      <Carousel {...cfg}>
      {renderSlides()}
      </Carousel>
    </S.SliderWrapper>
  )
});

const Slide = React.memo(({data, setLoaded, activeIndex, index}) => {
  const [isLoadData, setLoad] = useState({ isLoad: false, isFinishLoad: false });
  return (
    <S.Slide style={{ display: setDisplay(activeIndex, index) ? 'block' : 'none' }}>
      {isLoadData.isLoad ? <S.Image
        src={data.url}
        alt=""
        onLoad={() => setLoad({ isLoad: true, isFinishLoad: true })}
        onError={() => setLoad({ isLoad: false, isFinishLoad: true })}
      /> : <DotsLoader />}
    </S.Slide>
  )
});

function setDisplay(activeIndex, index) {
  if (activeIndex === index || activeIndex === index + 1 || activeIndex === index - 1
    || activeIndex === index + 2 || activeIndex === index - 2) {
    return true;
  }
  return false;
}