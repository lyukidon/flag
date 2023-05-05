import React from 'react';
import styled from 'styled-components';

const GameTemplateBlock = styled.div`
    margin: 0 auto;

    max-width: 450px;
    width: 100%;
    height: 100vh;

    background-color: #fff;

    text-align: center;
`;

export default ({setToggle}) => {

    const onClick = () => {
        setToggle(prev => !prev)
    }

    return(
        <GameTemplateBlock>
            <button onClick={onClick}>Start</button>
        </GameTemplateBlock>
    )
    
}