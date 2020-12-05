import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import FlagTemplate from './FlagTemplate';
import UserChoiceTemplate from './UserChoiceTemplate';
import { CountryCodes } from '../data/CountryCodes';

const GameTemplateBlock = styled.div`
    margin: 0 auto;
    
    max-width: 450px;
    width: 100%;
    height: 100vh;
    
    background-color: #fff;
    
    text-align: center;
`;

console.log(CountryCodes);

const RandomCountryCode = CountryCodes[Math.floor(Math.random() * 248)].Code.toLowerCase();

console.log(RandomCountryCode)

function GameTemplate() {
    return (
        <>
            <GameTemplateBlock>
                <Header />
                <FlagTemplate countryCode={RandomCountryCode} />
                <UserChoiceTemplate></UserChoiceTemplate>
            </GameTemplateBlock> 
        </>
    );
}

export default GameTemplate;