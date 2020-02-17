import styled from 'styled-components';

export const Wrapper = styled.div`
  --title-font-size: 44px;
  --title-line-height: 1.25;
  margin-right: 5rem;
  max-width: 70%;
  position: relative;
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

export const Descriptions = styled.div`
  font-family: 'Inconsolata', monospace;
  color: #f3f3f3;
  /* max-height: 185px; */
`;