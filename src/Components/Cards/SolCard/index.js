import React from 'react';
import * as S from './styled';

export const SolCard = React.memo(({ min, max, sol, date }) => (
  <S.Wrapper>
    <S.Front>
      <S.Sol>{'Sol: ' + sol}</S.Sol>
      <S.Date>{date}</S.Date>
      <S.Separator />
      <S.Temp>
        <S.Hight>{'Hight: ' + max + '°'}</S.Hight>
        <S.Min>{'Low: ' + min + '°'}</S.Min>
      </S.Temp>
    </S.Front>
    <S.Back />
  </S.Wrapper>
));