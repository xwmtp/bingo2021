import React from 'react';
import styled from "styled-components";

function TableRow(props) {
  return (
    <tr>
        <td>{props.name}</td>
        <td>{props.points}</td>
        <td>{props.median}</td>
        <td>{props.rounds}</td>
        <td>{props.dnf}</td>
    </tr>
  );
}

export default TableRow;
