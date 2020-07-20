import React from 'react';

function TableRow(props) {



  return (
    <tr>
        <td>{props.rank}</td>
        <td className='entrant-flag'><img src={`https://raw.githubusercontent.com/xwmtp/bingo2020/master/img/flags/${props.nation}.png`}/></td>
        <td className='entrant-name'>{props.name}</td>
        <td>{props.points}</td>
        <td>{props.median}</td>
        <td>{props.rounds}</td>
        <td>{props.dnf}</td>
    </tr>
  );
}

export default TableRow;
