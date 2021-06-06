import React from 'react';
import styled from "styled-components";
import {numToBracketRound} from '../rounds/BracketRounds';


const StyledTr = styled.tr`
    

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

function ScheduleRow(props) {

    let round;
    if (props.bracket !== undefined) {
        round = numToBracketRound[props.bracket]
        round = round.charAt(0).toUpperCase() + round.slice(1) /*capitalize*/
    } else {
        round = props.round
    }
    let name1 = <div className='entrant-name'><img src={`https://raw.githubusercontent.com/xwmtp/bingo2020/master/img/flags/${props.nation1}.png`} alt="flag" /> {props.name1}</div>
    let name2 = <div className='entrant-name'><img src={`https://raw.githubusercontent.com/xwmtp/bingo2020/master/img/flags/${props.nation2}.png`} alt="flag" /> {props.name2}</div>
    let restream = props.restream === '-'? '' : props.restream

    return (
        <StyledTr className={props.className}>
            <td>{round}</td>
            <td>{name1}</td>
            <td>{name2}</td>
            <td className='monospace'>{props.date}</td>
            <td>{props.time}</td>
            <td>{restream}</td>
        </StyledTr>
    );
}

export default ScheduleRow;
