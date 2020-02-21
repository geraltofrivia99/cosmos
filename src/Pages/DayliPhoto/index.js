import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react";
import { SliderComponent, CDImage, CDImageData } from '../../Components';
import * as S from './styled';

const INITIALDAYS = 5;

const settings = {
  transitionMode: "scroll",
  cellSpacing: 2,
  slidesToShow: 1.25,
  slidesToScroll: 1,
  heightMode: "first",
  // cellAlign: "center",
};

export const Dayli = observer(({ dayliData:
  { fullDaysData, addPrevDays, loadedImages, setLoadedSlides }
}) => {
  console.log('render');
  const [slideIndex, setSlideIndex] = useState(0);
  const [curentImageOpacity, setCurentImageOpacity] = useState(0);
  useEffect(() => {
    addPrevDays(INITIALDAYS);
  },[])
  const beforeSlide = (_, next) => {
    console.log('setOPacityToNull')
    setCurentImageOpacity(0);
    // setSlideIndex(next);
  }
  const afterSlide = (nextSlide) => {
    setSlideIndex(nextSlide);
    if (nextSlide === fullDaysData.length - 3) {
      // console.log('po4ti last', fullDaysData.length, nextSlide)
      addPrevDays(3);
    }
    
  }
  const cfg = { ...settings, afterSlide, beforeSlide, slideIndex }
  const curentSlideData = fullDaysData[slideIndex];
  const isCurentHdImageLoad = curentSlideData && loadedImages.get(curentSlideData.date);
  // const renderSlides = fullDaysData.filter(
  //   (cur, i) => i === slideIndex - 1 || i === slideIndex || i === slideIndex + 1
  // );
  
  return (
      <S.DayliSection>
       {!!fullDaysData.length &&
        <CDImage
          opacity={curentImageOpacity}
          setCurentImageOpacity={setCurentImageOpacity}
          defaultImage={curentSlideData.url}
          hdImage={curentSlideData.hdurl}
          isHdImageLoad={isCurentHdImageLoad}
        />
       }
        {fullDaysData.length >= 3 &&
          <S.SliderWrapper>
            <CDImageData
              title={curentSlideData.title}
              date={curentSlideData.date}
              exp={curentSlideData.explanation}
            />
            <SliderComponent
              data={fullDaysData}
              cfg={cfg}
              setLoadedSlides={setLoadedSlides} />
          </S.SliderWrapper>
        }
      </S.DayliSection>
  )
});