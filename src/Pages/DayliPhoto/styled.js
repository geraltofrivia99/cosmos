import styled from 'styled-components';

export const SliderWrapper = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    background: rgb(31,31,31);
    background: linear-gradient(0deg, rgba(31,31,31,1) 0%, rgba(31,31,31,0.9) 22%, rgba(31,31,31,0.8) 52%, rgba(32,31,31,0.5) 85%, rgba(0,0,0,0) 100%);
    z-index: 2;
`;

export const DayliSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 100%;
    overflow: hidden;
`;

export const Loading = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;