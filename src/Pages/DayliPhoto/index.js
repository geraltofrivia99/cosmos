import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react";
import { SliderComponent } from '../../Components';
import { CDImage } from '../../Components/CDImage';
import * as S from './styled';

const INITIALDAYS = 5;

const settings = {
  transitionMode: "scroll",
  cellSpacing: 18,
  slidesToShow: 3,
  slidesToScroll: 1,
  heightMode: "max",
  cellAlign: "left",
  slideIndex: 1,
};

export const Dayli = observer(({ dayliData: { fullDaysData, addPrevDays } }) => {
  console.log('render');
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    addPrevDays(INITIALDAYS);
  },[])
  const beforeSlide = (prevSlide, nextSlide) => {
    setSlideIndex(nextSlide)
    if (nextSlide === fullDaysData.length - 3) {
      console.log('po4ti last', fullDaysData.length, nextSlide)
      addPrevDays(3)
    }
  }
  const cfg = { ...settings, slideIndex, beforeSlide }

  return (
      <S.DayliSection>
       {!!fullDaysData.length && <CDImage image={fullDaysData[slideIndex].hdurl} />}
        {!!fullDaysData.length &&
          <S.SliderWrapper>
            <SliderComponent
              data={fullDaysData}
              cfg={cfg} />
          </S.SliderWrapper>
        }
      </S.DayliSection>
  )
});