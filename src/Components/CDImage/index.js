import React, { useCallback } from 'react';
import * as S from './styled';
import { observer } from "mobx-react";

import { DotsLoader } from '../DotsLoader';
import { FetchImageButton } from '../Buttons';

export const CDImage = observer(({
    defaultImage,
    hdImage,
    isHdImageLoad,
    setCurentImageOpacity,
    opacity
}) => {
    const handleLoading = useCallback(() => {
        console.log("ONLOADIMAGE", opacity)
        setCurentImageOpacity(1);
    }, []);
    return (
        <S.ImageWrapper>
            
            <S.Image
                opacity={opacity}
                src={isHdImageLoad ? hdImage : defaultImage}
                onLoad={handleLoading}
                onError={() => {console.log('onError')}}
                // decode={false}
            />
        </S.ImageWrapper>
    )
})

// {!isHdImageLoad && opacity &&
//     <S.LoadingHd>
//         <FetchImageButton url={hdImage} />
//         {/* <DotsLoader><span></span></DotsLoader> */}
//     </S.LoadingHd>}