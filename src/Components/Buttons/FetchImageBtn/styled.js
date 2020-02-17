import styled from 'styled-components';

export const Btn = styled.button`
  background: transparent;
  outline: none !important;
  position: relative;
  padding: 1rem;
  color: #f3f3f3;
  text-decoration: none;
  transition: 0.5s;
  border: none;
  cursor: pointer;
  overflow: hidden;
  /* -webkit-box-reflect: below 1px linear-gradient(transparent, #0003); */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid #f3f3f3;
    border-left: 2px solid #f3f3f3;
    transition: 0.5s;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #f3f3f3;
    border-right: 2px solid #f3f3f3;
    transition: 0.5s;
  }
  &:hover:before{
    width: 100%;
    height: 100%;
  }
  &:hover:after{
    width: 100%;
    height: 100%;

  }
  &:hover {
    background-color: #f3f3f3;
    color: #000;
    box-shadow: 0 0 50px #f3f3f3;
    transition-delay: 0.3s;
  }
`;