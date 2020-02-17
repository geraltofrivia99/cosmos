import styled, { keyframes } from 'styled-components';
import Img from 'react-image';

export const ImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #1f1f1f;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    opacity: ${({ opacity }) => opacity};
    transition: opacity 1s ease-in-out;
`;

export const LoadingHd = styled.span`
    position: absolute;
    top: 20px;
    right: 20px;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    z-index: 10;
`;
