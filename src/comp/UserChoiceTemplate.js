import React from "react";
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
`;

function UserChoiceTemplate({ answer, point, setPoint }) {
    let arr = [answer];
    for (let i = 0; i < 3; i++) {
        arr.push(CountryCodes[Math.floor(Math.random() * 248)].Name);
    }
    arr.sort((a, b) => a[1].localeCompare(b[1]));

    const checkUserChoice = (countryName) => {
        console.log("click");
        if (countryName === answer) {
            setPoint(point++);
        } else {
            alert("Wrong");
        }
    };

    return (
        <div>
            {arr.map((country) => (
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
