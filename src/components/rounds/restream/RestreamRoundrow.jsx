import React from 'react';
import styled from "styled-components";


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


function RestreamRoundRow(props) {

    let name1 = props.name1 === '-'? props.name1 : <div className='entrant-name'><img src={`https://raw.githubusercontent.com/xwmtp/bingo2020/master/img/flags/${props.nation1}.png`} alt="flag" /> {props.name1}</div>
    let points1 = props.points1
    let time1 = props.time1
    let seed1 = props.seed1
    let class1 = ''
    let class2 = ''
    let seed2 = props.seed2
    let time2 = props.time2
    let points2 = props.points2
    let name2 = props.name2 === '-'? props.name2 : <div className='entrant-name'><img src={`https://raw.githubusercontent.com/xwmtp/bingo2020/master/img/flags/${props.nation2}.png`} alt="flag" /> {props.name2}</div>

    console.log("test")
    console.log(seed2)
    if(props.name1 === props.name2) {
        time1 = '-'
        time2 = '-'
        points2 = '-'
        name2 = '-'
    }

    if (props.result1 === 'win') {
        class1 = 'yellow'
    }
    if (props.result2 === 'win') {
        class2 = 'yellow'
    }

    let cells;
    if (points1 === undefined) {
        cells = (
            <StyledTr>
            <td>{name1}</td>
            <td className={class1}>{time1}</td>
            <td className={class2}>{time2}</td>
            <td>{name2}</td>
            </StyledTr>
        )
    }
    else {
        cells = (
            <StyledTr>
                <td>{name1}</td>
                <td>{points1}</td>
                <td>{seed1}</td>
                <td>{seed2}</td>
                <td>{points2}</td>
                <td>{name2}</td>
            </StyledTr>
        );
    }

    return cells
}

export default RestreamRoundRow;
