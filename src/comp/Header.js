import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderTemplateBlock = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 10px;
`;

class Header extends Component {
    render() {
        return (
            <>
                <HeaderTemplateBlock>
                    <span>시간: </span>
                    <span>나라 국기 맞추기</span>
                    <span>점수: </span>
                </HeaderTemplateBlock>
            </>
        );
    }
}

export default Header;