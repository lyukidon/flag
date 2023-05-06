import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import FlagTemplate from "./FlagTemplate";
import UserChoiceTemplate from "./UserChoiceTemplate";
import { CountryCodes } from "../data/CountryCodes";
import GameResult from "../pages/GameResult";

const GameTemplateBlock = styled.div`
    margin: 0 auto;

    max-width: 450px;
    width: 100%;
    height: 100vh;

    background-color: #fff;

    text-align: center;
`;

function GameTemplate() {
    const [point, setPoint] = useState(0);
    const [wrong, countWrong] = useState(0);

    const [randomCountryCode, setRandomCountryCode] = useState({
        Code: "",
        Name: "",
    });

    useEffect(() => {
        setRandomCountryCode(CountryCodes[Math.floor(Math.random() * 248)]);
    }, [point]);

    const [time, setTime] = useState(1);

    useEffect(() => {
        if (time > 0) {
            const timer = setInterval(() => setTime((prev) => prev - 1), 1000);

            return () => clearInterval(timer);
        }
    }, [time]);

    return (
        <>
            <GameTemplateBlock>
                {time !== 0 ? (
                    <>
                        <Header time={time} point={point} wrong={wrong} />
                        <FlagTemplate
                            countryCode={randomCountryCode.Code.toLowerCase()}
                        />
                        <UserChoiceTemplate
                            answer={randomCountryCode.Name}
                            point={point}
                            setPoint={setPoint}
                            countWrong={countWrong}
                        />
                    </>
                ) : (
                    <GameResult point={point} wrong={wrong} setTime={setTime} setPoint={setPoint} setRandomCountryCode={setRandomCountryCode}/>
                )}
            </GameTemplateBlock>
        </>
    );
}

export default GameTemplate;
