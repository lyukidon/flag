import React from 'react';
import styled from 'styled-components';
import { CountryCodes } from '../data/CountryCodes';

const UserChoiceTemplateBlock = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    width: 70%;
    height: 40px;
    opacity: 0.5;
    background-color: lightblue;
    &:hover {
        opacity: 1;
    }
`;

function UserChoiceTemplate({answer}) {
    return (
        <>
            <UserChoiceTemplateBlock>{CountryCodes[Math.floor(Math.random() * 248)].Name}</UserChoiceTemplateBlock>
            <UserChoiceTemplateBlock>{answer}</UserChoiceTemplateBlock>
            <UserChoiceTemplateBlock>{CountryCodes[Math.floor(Math.random() * 248)].Name}</UserChoiceTemplateBlock>
            <UserChoiceTemplateBlock>{CountryCodes[Math.floor(Math.random() * 248)].Name}</UserChoiceTemplateBlock>
            <UserChoiceTemplateBlock>{CountryCodes[Math.floor(Math.random() * 248)].Name}</UserChoiceTemplateBlock>
        </>
    );
}

export default UserChoiceTemplate;