import React, { useEffect, useState, useMemo } from 'react';
import { observer } from "mobx-react";
import { SolCard } from '../../Components';
import { getParsedDate, IMAGE_URL } from '../../utils';

import * as S from './styled';

function renderSolsCards(solKeys, allData) {
  if (solKeys.length === 0) {
    return;
  }
  return solKeys.map((cur) => {
    const { mn, mx } = allData[cur].AT;
    return (
      <SolCard key={cur} sol={cur} min={Math.ceil(mn)} max={Math.ceil(mx)} date={getParsedDate(allData[cur].First_UTC, 'short')}/>
    )
  })
}

function renderCurrentSol(currentSol, currentDate, allData) {
  return (
    <S.CurrentData>
      <S.CurrentDate>
        <S.CurrentSoll>{!!currentSol && 'Sol ' + currentSol}</S.CurrentSoll>
        <S.CurentDay>{!!currentDate && currentDate}</S.CurentDay>
      </S.CurrentDate>
      <S.CurentTemp>
        <S.CurentMaxTemp>
          {!!currentSol &&  'Hight: ' + Math.ceil(allData[currentSol].AT.mx) + '°'}
        </S.CurentMaxTemp>
        <S.CurentMinTemp>
          {!!currentSol &&  'Low: ' + Math.ceil(allData[currentSol].AT.mn) + '°'}
        </S.CurentMinTemp>
      </S.CurentTemp>
    </S.CurrentData>
  )
}

export const MarsTemp = observer(({ marsData: { fetchData, currentSol, currentDate, allData, solKeys } }) => {
  const [imageVisible, setImageVisible] = useState(false);
  console.log('render MARS', currentSol, currentDate);
  useEffect(() => {
    loadImage(setImageVisible);
    fetchData();
  }, []);
  const memoizedSolCards = useMemo(() => renderSolsCards(solKeys, allData), [solKeys]);
  const memoizedCurrentSol = useMemo(() =>
    renderCurrentSol(currentSol, currentDate, allData), [currentSol]);
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
        {currentSol && allData[currentSol] && memoizedCurrentSol}
        <S.SolCardsWrapper>
          {solKeys && memoizedSolCards}
        </S.SolCardsWrapper>
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