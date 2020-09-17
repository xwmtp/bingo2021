import React from 'react';
import styled from "styled-components";


const StyledTd = styled.td`

    img {
        height: 13px;
        margin-right: 7px;
        border-radius: 3px;
    }

    @media only screen and (max-width: 550px) {
        img {
            display: none;
        }
        .entrant-name {
            padding: 0px 5px;
        }
    }

    .entrant-name {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
    }

    .yellow {
        color: var(--yellow)
    }

`

function Bracketcell(props) {

    const data = props.player
    let player;

    let className='entrant-name'
    if (data['result'] === 'win') {
        className += ' yellow'
    }

    if (data['name'] === '-'){
        player = '---'
    }
    else {
        player = <div className={className}><img src={`https://raw.githubusercontent.com/xwmtp/bingo2020/master/img/flags/${data['nationality']}.png`} alt="flag" /> {data['name']}</div>
    }
        
    return (
        <StyledTd className={props.color}>
            {player}
        </StyledTd>
    );
}

export default Bracketcell;
