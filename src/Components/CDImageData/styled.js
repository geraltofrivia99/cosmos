import styled, { keyframes } from 'styled-components';

const anim1 = keyframes`
  0% {
    clip-path: inset(0% 0% 0% 100%);
  }
  100% {
    clip-path: inset(0% 0% 0% 0%);
  }
`;

export const Descriptions = styled.div`
  font-family: 'Inconsolata', monospace;
  color: #f3f3f3;
  /* clip-path: inset(0% 0% 0% 100%); */
  /* transition: clip-path 0.5s ease-in-out; */
  /* max-height: 185px; */

`;

export const Wrapper = styled.div`
  --title-font-size: 44px;
  --title-line-height: 1.25;
  margin-right: 5rem;
  margin-bottom: 2%;
  max-width: 70%;
  position: relative;
  display: flex;
  align-self: flex-end;
  min-width: 200px;
  /* &:hover ${Descriptions} {
    animation-name: ${anim1};
    animation-direction: forward;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
  } */
`;

export const Title = styled.div`
    font-size: var(--title-font-size);
    font-weight: 900;
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: transparent;
    text-indent: 1rem;
    position: absolute;
    top: calc(var(--title-font-size) * var(--title-line-height) * -1);
    white-space: nowrap;
    line-height: var(--title-line-height);
`;