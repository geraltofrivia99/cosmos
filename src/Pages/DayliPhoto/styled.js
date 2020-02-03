import styled from 'styled-components';

export const SliderWrapper = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20%;
`;

export const DayliSection = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 100%;
`;