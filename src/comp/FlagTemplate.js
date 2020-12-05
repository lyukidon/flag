import React from 'react';
import styled from 'styled-components';

const FlagContainer = styled.div`
    margin: 0 auto;
    margin-top: 40px;
`;

function FlagTemplate({ countryCode }) {

    const src = `https://flagcdn.com/120x90/${countryCode}.png`;

    return (
        <>
            <FlagContainer>
                <img
                    src={src}
                />
            </FlagContainer>
        </>
    );
}

export default FlagTemplate;