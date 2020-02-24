import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react";

import * as S from './styled';

const IMAGE_URL = 'https://mars-jpl-nasa-gov.s3.amazonaws.com/src/insight/insight_weather_bg.jpg';

export const MarsTemp = observer(({ marsData: { fetchData, currentSol, currentDate } }) => {
  const [imageVisible, setImageVisible] = useState(false);
  console.log('render', currentSol, currentDate)
  useEffect(() => {
    loadImage(setImageVisible);
    fetchData();
  }, []);
  return (
    <S.Wrapper>
      <S.BgImageWrapper>
       {imageVisible &&
          <S.BgImage
          src={IMAGE_URL}
        />
       }
      </S.BgImageWrapper>
      <S.Container>
        <S.TitleWrapper>
          <S.Title>
            <h1>Mars Insight</h1>
          </S.Title>
          <S.SubTitle>
            <h3>
              Latest Weather at Elysium Planitia
            </h3>
          </S.SubTitle>
        </S.TitleWrapper>
        <S.Description>
          <h5>InSight is taking daily weather measurements (temperature, wind, pressure)
             on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator.
          </h5>
        </S.Description>
        <S.CurrentData>
          <S.CurrentDate>
            <S.CurrentSoll>{!!currentSol && 'Sol ' + currentSol}</S.CurrentSoll>
            <S.CurentTemp>{!!currentDate && currentDate}</S.CurentTemp>
          </S.CurrentDate>
        </S.CurrentData>
      </S.Container>
    </S.Wrapper>
  )
});

function loadImage(callback) {
   const img = new Image();
      img.src = IMAGE_URL;
      img.onload = () => {
        callback(true)
      }
      img.onerror = () => {
        callback(false)
      }
}