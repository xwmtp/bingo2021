import styled from "styled-components";
import React from "react";
import RoundRow from './Roundrow'
import data from '../../data/bingo2021_pairings'
import bracket from '../../data/bingo2021_bracket'
import { BracketRoundToNum } from './BracketRounds.js'

class Round extends React.Component {

    StyledRound = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        p {
            color: #C8C8C8;
            text-align: center;
        }

        .narrow {
            @media only screen and (min-width: 600px) {
                width: 550px;
                td, th {
                    padding: 6px 30px;
                }
            }
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
            padding: 6px 20px;
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
            padding: 6px 10px;
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
            padding: 6px 5px;
        }
        
    }
    `;

    createRoundRow = (pair) => {
        return <RoundRow
            name1={pair['player1']['name']}
            nation1={pair['player1']['nationality']}
            points1={pair['player1']['points']}
            time1={pair['player1']['time']}
            result1={pair['player1']['result']}

            name2={pair['player2']['name']}
            nation2={pair['player2']['nationality']}
            points2={pair['player2']['points']}
            time2={pair['player2']['time']}
            result2={pair['player2']['result']}
            key={pair['key']}
        />
    };

    render() {
        const i = this.props.match.params.i
        const pair_data = data[i];
        const bracket_data = bracket[BracketRoundToNum(i)]

        let contents = <><h2>This round doesn't exist.</h2></>

        let row_components;
        let header;
        let footer = <></>;
        let tableClass = ''

        if (pair_data !== undefined) {
            row_components = pair_data.map(this.createRoundRow);
            header = (<tr>
                <th>Player</th>
                <th className='lg-view'>Points</th>
                <th className='sm-view'>Pts</th>
                <th>Result</th>
                <th>Result</th>
                <th className='lg-view'>Points</th>
                <th className='sm-view'>Pts</th>
                <th>Player</th>
            </tr>)
            footer = <p>Note: 'points' shows the amount of points players had at the start of the round.</p>

        }
        if (bracket_data !== undefined) {
            row_components = bracket_data.map(this.createRoundRow)
            header = (<tr>
                <th>Player</th>
                <th>Result</th>
                <th>Result</th>
                <th>Player</th>
            </tr>)
            tableClass = 'narrow'
        }


        if (row_components !== undefined) {
            contents = (
                <this.StyledRound id='round'>
                    <this.StyledTable id='round-table' className = {tableClass}>
                        <tbody>
                            {header}
                            {row_components}
                        </tbody>
                    </this.StyledTable>
                    {footer}
                </this.StyledRound>
            );
        }


        return (
            contents
        )
    }

}

export default Round;