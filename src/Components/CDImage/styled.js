import styled from 'styled-components';
import Img from 'react-image';

export const ImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: #1f1f1f;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;