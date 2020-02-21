import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react";

import * as S from './styled';

const IMAGE_URL = 'https://mars-jpl-nasa-gov.s3.amazonaws.com/src/insight/insight_weather_bg.jpg';

export const MarsTemp = observer(({ marsData: { fetchData, solKeys } }) => {
  const [imageVisible, setImageVisible] = useState(false);
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <S.Wrapper>
      <S.BgImageWrapper>
        <S.BgImage
          src={IMAGE_URL}
          onLoad={() => setImageVisible(true)}
          onError={() => setImageVisible(false)}
        />
      </S.BgImageWrapper>
      {solKeys.map((cur) => <p key={cur}>{cur}</p>)}
    </S.Wrapper>
  )
})