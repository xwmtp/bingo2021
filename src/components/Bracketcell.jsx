import React from 'react';
import styled from "styled-components";


const StyledTd = styled.td`

    img {
        height: 13px;
        margin-right: 10px;
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

`

function Bracketcell(props) {

    const data = props.player
    let player;

    if (data['name'] === '---'){
        player = data['name']
    }
    else {
        player = <div className='entrant-name'><img src={`https://raw.githubusercontent.com/xwmtp/bingo2020/master/img/flags/${data['nationality']}.png`} alt="flag" /> {data['name']}</div>
    }
        
    return (
        <StyledTd className={props.color}>
            {player}
        </StyledTd>
    );
}

export default Bracketcell;
