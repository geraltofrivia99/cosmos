import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const SliderWrapper = styled.div`
    width: 100%;
    max-width: 350px;
    height: 11rem;
    display: flex;
    align-self: flex-end;
    @media (max-width: 1000px) {
        max-width: 250px;
        height: 9rem;
    }
`;

// ------------------- Slide ------------------

export const Slide = styled.div`
    background-color: rgba(31,31,31,1);
    box-shadow: 0 1px 2px 1px rgba(0,0,0,.08), 0 -1px 3px 0 rgba(0,0,0,0.06);
    border-radius: 2px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    /* -webkit-box-reflect: below 1px linear-gradient(transparent, #0005); */
    -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(60%, transparent), to(#0005));
    @media (max-width: 1000px) {
        height: 6rem;
    }
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    opacity: 0;
    animation: ${fadeIn} .5s ease-in-out forwards;
`;