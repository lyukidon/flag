import React, { Component } from "react";
import styled from "styled-components";

const HeaderTemplateBlock = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 10px;
`;

class Header extends Component {
    render() {
        const { point, time, wrong } = this.props;

        return (
            <>
                <HeaderTemplateBlock>
                    <span>시간: {time}</span>
                    <span>나라 국기 맞추기</span>
                    <span>
                        <span>틀린 횟수: {wrong}</span>
                        <span>점수: {point}</span>
                    </span>
                </HeaderTemplateBlock>
            </>
        );
    }
}

export default Header;
