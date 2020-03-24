import styled, { keyframes } from 'styled-components';

const placeHolderSwept = keyframes `
   0%{
    transform: translate3d(-100%, 0, 0);
  }
 100%{
    transform: translate3d(100%, 0, 0);
  }
`;


export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(31,31,31,1);
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    background-color: rgba(31,31,31,1);
    /* background-color: #ffffff; */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-name: ${placeHolderSwept};
    animation-timing-function: linear;
    background: linear-gradient(to right, rgba(31,31,31,0) 0%, rgba(77, 75, 75, 0.4) 30%, rgba(31,31,31,0) 81%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#00ffffff',GradientType=1 );
  }
  &:before {
    content: '';
    height: 100%;
    display: block;
    background-color: rgba(31,31,31,1);
    box-shadow: -48px 78px 0 -48px #ededed, -51px 102px 0 -51px #ededed;
  }
`;