import styled from "styled-components";
import React from "react";
import TableRow from './Tablerow'
import data from '../data/bingo2020_leaderboard'

class Table extends React.Component {

    StyledTable = styled.table`
        padding: 30px;
        border: none;
        border-spacing: 0px;

        th {
            text-align: center;
        }

        tr:nth-child(even) {background-color: #383838;}

        td, th {
            padding: 5px 30px;
            border: none;
            vertical-align: center;
            text-align: center;
        }

        .entrant-name {
            text-align: left

        }

    `

    render() {

        const rows = data['length']
        const createTableRow = (rank) => {
            const entrant_data = data['entrants'][rank.toString()]
            return <TableRow
                rank={rank}
                name={entrant_data['name']}
                key={entrant_data['name']}
                nation={entrant_data['nationality']}
                points={entrant_data['points']}
                median={entrant_data['median']}
                rounds={entrant_data['rounds']}
                dnf={entrant_data['dnf']}
            />
        }

        let row_components = []
        for (let i = 1; i <= rows; i++) {
            row_components.push(createTableRow(i))
        }


        return (
            <this.StyledTable>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Points</th>
                        <th>Median</th>
                        <th>Rounds</th>
                        <th>DNF</th>
                    </tr>
                    {row_components}
                </tbody>
            </this.StyledTable>
        )
    }

}

export default Table;