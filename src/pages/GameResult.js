import React from "react";
import styled from "styled-components";
import { CountryCodes } from "../data/CountryCodes";

const GameTemplateBlock = styled.div`
    margin: 0 auto;

    max-width: 450px;
    width: 100%;
    height: 100vh;

    background-color: #fff;

    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 500;
    }
    > button {
        width: 70%;
        height: 40px;
        opacity: 0.5;
        background-color: lightblue;
        &:hover {
            opacity: 1;
        }
        border: none;
        font-size: 17px;
        font-weight: 400;
    }
`;

export default ({ point, wrong, setTime, setPoint, setRandomCountryCode }) => {
    const onClick = () => {
        setTime(60);
        setPoint(0);
        setRandomCountryCode(CountryCodes[Math.floor(Math.random() * 248)]);
    };

    return (
        <GameTemplateBlock>
            <div>Point: {point - wrong}</div>
            <div>Correct: {point}</div>
            <div>wrong count: {wrong}</div>
            <button onClick={onClick}>restart</button>
        </GameTemplateBlock>
    );
};
