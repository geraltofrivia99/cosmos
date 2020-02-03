import React from 'react';
import * as S from './styled';
import { observer } from "mobx-react";

export const CDImage = observer(({ image }) => (
    <S.ImageWrapper>
        <S.Image
            src={image}
            onLoad={() => {console.log('onLoad')}}
            onError={() => {console.log('onError')}}
            // decode={false}
        />
    </S.ImageWrapper>
))