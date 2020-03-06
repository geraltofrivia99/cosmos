import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const typing =  keyframes`
  from { width: 0 }
  to { width: 100% }
`;

/* The typewriter cursor effect */
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange }
`;

const borderfadeOut = keyframes`
  from, to {
    border: none;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  /* background: url('https://mars-jpl-nasa-gov.s3.amazonaws.com/src/insight/insight_weather_bg.jpg') no-repeat top center;
  background-size: cover; */
`;
export const BgImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 70%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 100%;
  animation-name: ${fadeIn};
  animation-duration: .3s;  
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 7% 10%;
  height: 86%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  z-index: 1;
`;

export const TitleWrapper = styled.div`
  grid-area: 1/1/2/3;
  font-family: 'Bowlby One SC', sans-serif;
`;

export const Title = styled.div`
  font-size: 3em;
  width: fit-content;
  color: #f3f3f3;
  & h1 {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    /* border-right: .15em solid orange; */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: transparent;
    font-family: 'Bowlby One SC', sans-serif;
    /* animation: 
    ${typing} 3.5s steps(30, end),
    ${blinkCaret} .5s step-end 7,
    ${borderfadeOut} .1s linear 3.6s forwards; */
  }
`;

export const SubTitle = styled.div`
  font-family: 'Amatic SC', monospace;
  font-size: 3em;
  font-weight: 700;
  width: fit-content;
  & h3 {
      margin: .2em 0;
      color: #f5f5f5;
      opacity: 0;
      animation: ${fadeIn} .3s ease-in-out 1s forwards;
    }
`;

export const Description = styled.div`
  grid-area: 2/1/3/3;
  font-family: 'Amatic SC', monospace;
  font-size: 2em;
  font-weight: 500;
  & h5 {
    margin: .2em 0;
    color: #f5f5f5;
    opacity: 0;
    animation: ${fadeIn} .3s ease-in-out 1s forwards;
  }
`;

export const CurrentData = styled.div`
  /* grid-area: 3/1/4/3; */
  display: contents;
  font-size: 1.5em;
  color: #f3f3f3;
  opacity: 0;
  animation: ${fadeIn} .3s ease-in-out 1s forwards;
`;

export const CurrentDate = styled.div`
  grid-area: 3/1/4/2;
  display: inline-flex;
  flex-direction: column;
  margin: 0 2rem;
  font-family: 'Inconsolata', monospace;
  font-size: 1.5em;
  color: #f3f3f3;
  opacity: 0;
  animation: ${fadeIn} .3s ease-in-out 1s forwards;
`;

export const CurrentSoll = styled.div`
  font-weight: 700;
  white-space: nowrap;
  font-family: 'Bowlby One SC', sans-serif;
  text-shadow: -20px 20px 2px rgba(31,29,31,0.5), 0 0 2px #1f1f1f;
`;

export const CurentDay = styled.div`
  white-space: nowrap;
  font-weight: 300;
  font-family: 'Amatic SC', monospace;
  text-shadow: -14px 19px 2px #1f1f1f, 0 0em 1em #1f1f1f;
`;

export const CurentTemp = styled.div`
  grid-area: 3/2/4/3;
  display: inline-flex;
  flex-direction: column;
  color: #f3f3f3;
  opacity: 0;
  font-size: 1.5em;
  font-family: 'Amatic SC', monospace;
  animation: ${fadeIn} .3s ease-in-out 1s forwards;
`;

export const CurentMaxTemp = styled.div`
  white-space: nowrap;
  text-shadow: -14px 19px 2px #1f1f1f, 0 0em 1em #1f1f1f;
  font-weight: 100;
  
`;

export const CurentMinTemp = styled.div`
  white-space: nowrap;
  font-weight: 100;
  text-shadow: -14px 19px 2px #1f1f1f, 0 0em 1em #1f1f1f;
  
`;

export const SolCardsWrapper = styled.div`
  grid-area: 4/1/5/5;
  text-align: center;
  /* perspective: 1400px;
  perspective-origin: 100% 100%; */
`;

