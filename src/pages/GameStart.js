import React from "react";
import styled from "styled-components";

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
`;

const Title = styled.div`
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 600;
`

const Button = styled.button`
    width: 70%;
    height: 40px;
    opacity: 0.5;
    background-color: lightblue;
    &:hover {
        opacity: 1;
    }
    border:none;
    font-size: 17px;
`;

export default ({ setToggle }) => {
    const onClick = () => {
        setToggle((prev) => !prev);
    };

    return (
        <GameTemplateBlock>
            <Title>Flag Game <img height={30} src="https://flagcdn.com/120x90/kr.png"></img></Title>
            <Button onClick={onClick}>Start</Button>
        </GameTemplateBlock>
    );
};
