import React from 'react';
import styled from "styled-components";

function About(props) {
    const StyledDiv = styled.div`
    width: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;

    p {
        text-align: center;
        padding: 20px 0px;
    }
    `

    return (
        <StyledDiv>
            <p>After 2.5 years, the Bingo Tournament is back! This tourney will consist of two stages.
                This site is mostly used for Stage 1, the Swiss rounds.
                
            </p>
            <p>To enter the tourney, contact Fleush#3233 or xwillmarktheplace#4400 on Discord.</p>
        </StyledDiv>
    );
}

export default About;
