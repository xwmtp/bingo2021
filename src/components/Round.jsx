import styled from "styled-components";
import React from "react";
import RoundRow from './Roundrow'
import data from '../data/bingo2020_pairings'

class Round extends React.Component {


    StyledRound = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            color: #C8C8C8
        }

    `

    StyledTable = styled.table`
        max-width: 800px;
        width: 20%;
        margin: 30px 0px;
        border: none;
        border-spacing: 0px;
        font-size: 16px;

        tr:nth-child(even) {background-color: #383838;}

        td, th {
            padding: 5px 20px;
            border: none;
            vertical-align: center;
            text-align: center;
        }

        #overflow {
            overflow-x: auto;
            white-space: nowrap;
        }

        p {
            text-align: center;
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

        const pair_data = data[1];
        const createRoundRow = (pair) => {
            return <RoundRow
                name1={pair['player1']['name']}
                nation1={pair['player1']['nationality']}
                points1={pair['player1']['points']}
                result1={pair['player1']['time']}
                name2={pair['player2']['name']}
                nation2={pair['player2']['nationality']}
                points2={pair['player2']['points']}
                result2={pair['player2']['time']}
                key={pair['player1']['name'] + pair['player2']['name']}
            />
        };

        const row_components = pair_data.map(createRoundRow);

        return (
            <this.StyledRound>
                <div id='overflow'>

                    <this.StyledTable>
                        <tbody>
                            <tr>
                                <th>Player</th>
                                <th>Points</th>
                                <th>Result</th>
                                <th>Result</th>
                                <th>Points</th>
                                <th>Player</th>
                            </tr>
                            {row_components}
                        </tbody>
                    </this.StyledTable>
                </div>

                <p>Note: 'points' shows the amount of points players had at the start of the round.</p>

            </this.StyledRound>
        )
    }

}

export default Round;