import React from 'react';
import styled from 'styled-components';
import { CountryCodes } from '../data/CountryCodes';

const GameTemplateBlock = styled.div`
    margin: 0 auto;

    max-width: 450px;
    width: 100%;
    height: 100vh;

    background-color: #fff;

    text-align: center;
`;

export default ({point, wrong, setTime, setPoint, setRandomCountryCode}) => {

    const onClick = () => {
        setTime(60)
        setPoint(0)
        setRandomCountryCode(CountryCodes[Math.floor(Math.random() * 248)]);
    }

    return (
        <GameTemplateBlock>
            <div>point: {point}</div>
            <div>wrong count: {wrong}</div>
            <button onClick={onClick}>restart</button>
        </GameTemplateBlock>
    )
}