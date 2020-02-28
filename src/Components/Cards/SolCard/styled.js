import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1em;
  width: 11%;
  margin: 20px 1% 50px;
  padding: 15px 0.2%;
  display: inline-block;
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 20px;
  color: #f3f3f3;
  font-family: 'Amatic SC', monospace;
  font-weight: 600;
  position: relative;
  /* transform-style: preserve-3d; */
  background-color: rgba(0,0,0,0.25);
  transition: transform .3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Front = styled.div`
  width: 100%;
  height: 100%;
`;

export const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  background-color: rgba(0,0,0,0.9);
`;

export const Sol = styled.span`
  font-size: 16px;
  font-weight: 600;
  font-family: 'Bowlby One SC', sans-serif;
`;

export const Date = styled.span`
  font-size: 18px;
  letter-spacing: 0;
  display: block;
`;

export const Separator = styled.div`
  background-color: rgba(255,255,255,0.5);
  height: 2px;
  width: 80%;
  text-align: center;
  margin: 10px auto;
`;

export const Temp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Hight = styled.span`

`;

export const Min = styled.span`

`;