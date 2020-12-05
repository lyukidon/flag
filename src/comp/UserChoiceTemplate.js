import React from 'react';
import styled from 'styled-components';

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

function UserChoiceTemplate() {
    return (
        <>
            <UserChoiceTemplateBlock>Korea</UserChoiceTemplateBlock>
            <UserChoiceTemplateBlock>Canada</UserChoiceTemplateBlock>
            <UserChoiceTemplateBlock>Japan</UserChoiceTemplateBlock>
            <UserChoiceTemplateBlock>China</UserChoiceTemplateBlock>
        </>
    );
}

export default UserChoiceTemplate;