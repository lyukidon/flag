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
    let arr=[answer];
    for (let i=0;i<3;i++){
        arr.push(CountryCodes[Math.floor(Math.random() * 248)].Name);
    }
    console.log(arr)
    arr.sort();
    console.log(arr);
    return (
        <div>
            {
                arr.map(
                    country =>
                        <UserChoiceTemplateBlock>
                            {country}
                        </UserChoiceTemplateBlock>
                )
            }
        </div>
    );
}

export default UserChoiceTemplate;