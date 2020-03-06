import styled from 'styled-components';

export const ScrollControls = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: fixed;
  /* min-width: 135px; */
  top: 50%;
  right: -65px;
  z-index: 100;
  padding: 1rem;
  cursor: pointer;
  transition: right 0.3s;
  background-color: rgba(0,0,0,0.25);
  &:hover {
    right: 0px;
  }
  &:hover p {
    opacity: 1;
  }
  &:hover span {
    transform: scale(1.5);
  }
  & div {
    color: #f1f1f1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 0.6rem;
    &:hover {
      color: gray;
      & span {
        background-color: gray;
      }
    }
    & p {
      transition: opacity 0.3s;
      opacity: 0;
      white-space: nowrap;
    
    }
    & span {
      margin: 0.5rem;
      background-color: #f1f1f1;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      transition: transform 0.3s;
    }
  }
`;

export const FakeView = styled.div`
  width: 100%;
  height: 100vh;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;
