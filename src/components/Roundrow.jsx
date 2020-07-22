import React from 'react';
import styled from "styled-components";


const StyledTr = styled.tr`
    

img {
    height: 13px;
    margin-right: 10px;
    border-radius: 3px;
}


.entrant-name {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
}



`


function RoundRow(props) {

    let name1 = <div className='entrant-name'><img src={`https://raw.githubusercontent.com/xwmtp/bingo2020/master/img/flags/${props.nation1}.png`} alt="flag" /> {props.name1}</div>
    let points1 = props.points1
    let result1 = props.result1
    let result2 = props.result2
    let points2 = props.points2
    let name2 = <div className='entrant-name'><img src={`https://raw.githubusercontent.com/xwmtp/bingo2020/master/img/flags/${props.nation2}.png`} alt="flag" /> {props.name2}</div>


    if(props.name1 === props.name2) {
        result1 = '-'
        result2 = '-'
        points2 = '-'
        name2 = '-'
    }

    return (
        <StyledTr>
            <td>{name1}</td>
            <td>{points1}</td>
            <td>{result1}</td>
            <td>{result2}</td>
            <td>{points2}</td>
            <td>{name2}</td>
        </StyledTr>
    );
}

export default RoundRow;
