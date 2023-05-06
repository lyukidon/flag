import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CountryCodes } from "../data/CountryCodes";

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
    font-size: 17px;
`;

function UserChoiceTemplate({ answer, setPoint, countWrong }) {
    const [options, setOptions] = useState([]);

    useEffect(()=>{
        let arr=[answer]
        const selectOptions = () => {
            if (arr.length < 4){
                const option = CountryCodes[Math.floor(Math.random() * 248)].Name;
                for (let i=0;i<arr.length;i++){
                    if (arr[i] === option){
                        selectOptions();
                        break;
                    }
                }
                    arr = [...arr,option]
                selectOptions();
            }
        }
        selectOptions()

        arr.sort((a, b) => a[1].localeCompare(b[1]));

        setOptions(arr);
    },[answer])    

    const checkUserChoice = (country) => {
        if (country === answer) {
            setPoint(prev => prev+1);
        } else {
            countWrong(prev => prev + 1);
        }
    };

    return (
        <div>
            {options.map((country) => (
                <UserChoiceTemplateBlock
                    className="example"
                    key={country}
                    onClick={() => checkUserChoice(country)}
                >
                    {country}
                </UserChoiceTemplateBlock>
            ))}
        </div>
    );
}

export default UserChoiceTemplate;
