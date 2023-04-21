import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import FlagTemplate from "./FlagTemplate";
import UserChoiceTemplate from "./UserChoiceTemplate";
import { CountryCodes } from "../data/CountryCodes";

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
    
    let RandomCountryCode = CountryCodes[Math.floor(Math.random() * 248)];

    useEffect(()=>{
        RandomCountryCode = CountryCodes[Math.floor(Math.random() * 248)]
    },[point])

    return (
        <>
            <GameTemplateBlock>
                <Header point={point}/>
                <FlagTemplate
                    countryCode={RandomCountryCode.Code.toLowerCase()}
                />
                <UserChoiceTemplate
                    answer={RandomCountryCode.Name}
                    point={point}
                    setPoint={setPoint}
                ></UserChoiceTemplate>
            </GameTemplateBlock>
        </>
    );
}

export default GameTemplate;
