import React from 'react';
import styled from "styled-components";

function TableRow(props) {

    const StyledTr = styled.tr`

    td img {
        height: 15px;
        padding-right: 10px;
    }

    .entrant-name {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
    }
`

    return (
        <StyledTr>
            <td>{props.rank}</td>
            <td className='entrant-name'><img src={`https://raw.githubusercontent.com/xwmtp/bingo2020/master/img/flags/${props.nation}.png`} /> {props.name}</td>
            <td>{props.points}</td>
            <td>{props.median}</td>
            <td>{props.rounds}</td>
            <td>{props.dnf}</td>
        </StyledTr>
    );
}

export default TableRow;
