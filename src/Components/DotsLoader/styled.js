import styled, { keyframes } from 'styled-components';

const loader51 = keyframes`
    {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const loader52 = keyframes`
    {
        0%   { transform: translate3d(0, 0, 0) scale(1); }
        50%  { transform: translate3d(24px, 0, 0) scale(.5); }
        100% { transform: translate3d(0, 0, 0) scale(1); }
    }
`;

const loader53 = keyframes`
    {
        0%   { transform: translate3d(0, 0, 0) scale(1); }
        50%  { transform: translate3d(-24px, 0, 0) scale(.5); }
        100% { transform: translate3d(0, 0, 0) scale(1); }
    }
`;

const loader54 = keyframes`
    {
        0%   { -webkit-transform: translate3d(0, 0, 0) scale(1); }
        50%  { -webkit-transform: translate3d(0, 24px, 0) scale(.5); }
        100% { -webkit-transform: translate3d(0, 0, 0) scale(1); }
    }
`;

const loader55 = keyframes`
    {
        0%   { -webkit-transform: translate3d(0, 0, 0) scale(1); }
        50%  { -webkit-transform: translate3d(0, -24px, 0) scale(.5); }
        100% { -webkit-transform: translate3d(0, 0, 0) scale(1); }
    }
`;

export const Dots = styled.div`
    height: 32px;
	width: 32px;
	-webkit-animation: ${loader51} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
	        animation: ${loader51} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
    
    &:before {
        content: "";
        display: block;
        position: absolute;
        top: 0; left: 0;
        bottom: 0; right: auto;
        margin: auto;
        width: 8px;
        height: 8px;
        background: #FFF;
        border-radius: 50%;
        -webkit-animation: ${loader52} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
                animation: ${loader52} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
    }
    &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0; left: auto;
        bottom: 0; right: 0;
        margin: auto;
        width: 8px;
        height: 8px;
        background: #FFF;
        border-radius: 50%;
        -webkit-animation: ${loader53} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
                animation: ${loader53} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
    }
    & span {
        display: block;
        position: absolute;
        top: 0; left: 0;
        bottom: 0; right: 0;
        margin: auto;
        height: 32px;
        width: 32px;
        &:before {
            content: "";
            display: block;
            position: absolute;
            top: 0; left: 0;
            bottom: auto; right: 0;
            margin: auto;
            width: 8px;
            height: 8px;
            background: #FFF;
            border-radius: 50%;
            -webkit-animation: ${loader54} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
                    animation: ${loader54} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
        }
        &:after {
            content: "";
            display: block;
            position: absolute;
            top: auto; left: 0;
            bottom: 0; right: 0;
            margin: auto;
            width: 8px;
            height: 8px;
            background: #FFF;
            border-radius: 50%;
            -webkit-animation: ${loader55} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
                    animation: ${loader55} 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
        }
    }
`;
