import styled from "styled-components";
import React from "react";
import TableRow from './Tablerow'
import data from '../data/bingo2020_leaderboard'

class Table extends React.Component {

    StyledTable = styled.table`
        max-width: 800px;
        width: 70%;
        margin: 30px 0px;
        border: none;
        border-spacing: 0px;
        flex-shrink: 0;
        font-size: 16px;

        tr:nth-child(even) {background-color: var(--row-color);}

        td, th {
            padding: 5px 30px;
            border: none;
            vertical-align: center;
            text-align: center;
        }

        #overflow {
            overflow-x: auto;
            white-space: nowrap;
        }

        @media only screen and (max-width: 800px) {
        .extra-info{
            display: none;
        }
        td, th {
            padding: 5px 7px;
        }
        
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
            <div id='overflow'>
                <this.StyledTable>
                    <tbody>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Points</th>
                            <th>Median</th>
                            <th className = 'extra-info'>Rounds</th>
                            <th className = 'extra-info'>DNF</th>
                        </tr>
                        {row_components}
                    </tbody>
                </this.StyledTable>
            </div>
        )
    }

}

export default Table;