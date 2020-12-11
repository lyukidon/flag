import React from 'react';
import styled from 'styled-components';
import { CountryCodes } from '../data/CountryCodes';
import {headerPoint} from '../data/headerPoint';


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
    let arr=[answer];
    for (let i=0;i<3;i++){
        arr.push(CountryCodes[Math.floor(Math.random() * 248)].Name);
    }
    arr.sort((a,b)=>a[1].localeCompare(b[1]));

    const checkUserChoice = (countryName) => {
        if (countryName === answer){
            alert("true");
            headerPoint['점수']++;
            console.log(headerPoint['점수'])
        }else{
            alert("false")
        }
    }

    return (
        <div>
            {
                arr.map(
                    country =>
                        <UserChoiceTemplateBlock className = 'example' key = {country} onClick={(e) => checkUserChoice(country)}>
                            {country}
                        </UserChoiceTemplateBlock>
                )
            }
        </div>
    );
}

export default UserChoiceTemplate;