import React from 'react';
import * as S from './styled';


export const CDImageData = React.memo(({ title, date, exp }) => {
  return  (
    <S.Wrapper>
      <S.Title>{title} {date}</S.Title>
      <S.Descriptions>{exp}</S.Descriptions>
    </S.Wrapper>
  )
})