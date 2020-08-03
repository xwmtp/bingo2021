import styled from "styled-components";
import React from "react";
import RoundRow from './Roundrow'
import data from '../data/bingo2020_pairings'

class Round extends React.Component {

    StyledRound = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
            color: #C8C8C8;
            text-align: center;
        }

        @media only screen and (max-width: 550px) {
        p {
            font-size: 11px;
            margin: 0px 20px;
        }
    }
    `;

    StyledTable = styled.table`
        width: 750px;
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
        .sm-view{
            display:none;
        }
        .lg-view{
            display:table-cell;
        }

        @media only screen and (max-width: 800px) {
        width: 95vw;     
        td, th {
            padding: 5px 10px;
        }   
    }


        @media only screen and (max-width: 550px) {
        width: 95vw;
        .sm-view{
            display:table-cell;
        }
        .lg-view{
            display:none;
        }
        .extra-info{
            display: none;
        }
        td, th {
            font-size: 11px;
            padding: 5px 5px;
        }
        
    }
    `;

    render() {
        const i = this.props.match.params.i
        const pair_data = data[i];
        let contents = <></>

        if (pair_data !== undefined) {
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
            contents = (
                <this.StyledRound id='round'>
                        <this.StyledTable id='round-table'>
                            <tbody>
                                <tr>
                                    <th>Player</th>
                                    <th className='lg-view'>Points</th>
                                    <th className='sm-view'>Pts</th>
                                    <th>Result</th>
                                    <th>Result</th>
                                    <th className='lg-view'>Points</th>
                                    <th className='sm-view'>Pts</th>
                                    <th>Player</th>
                                </tr>
                                {row_components}
                            </tbody>
                        </this.StyledTable>

                    <p>Note: 'points' shows the amount of points players had at the start of the round.</p>

                </this.StyledRound>
            );
        }

        return (
            contents
        )
    }

}

export default Round;