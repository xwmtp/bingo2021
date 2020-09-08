import styled from "styled-components";
import React from "react";
import bracket from '../data/bingo2020_bracket'
import Bracketcell from './Bracketcell'


class Bracket extends React.Component {

    StyledBracket = styled.table`
        margin: 30px 0px;
        border: none;
        border-spacing: 0px;
        flex-shrink: 0;
        font-size: 16px;

        /*tr:nth-child(even) {background-color: var(--row-color);}*/
        .grey {
            background-color : rgb(43,43,43);
            vertical-align: bottom;
        }
        .light-grey {
            background-color : rgb(50,50,50);
        }

        .round {
            font-weight: bold;
            text-transform: uppercase;
        }


        td, th {
            border: none;
            vertical-align: center;
            text-align: center;
        }

        td {
            padding: 5px 30px;
        }

        th {
            padding: 25px 30px;
            text-transform: uppercase;
        }

        .overflow {
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

        return (
            <div className='overflow'>
                <this.StyledBracket>
                    <tbody>
                        <tr>
                            <td className='round'>Top 16</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='round'>Top 16</td>
                        </tr>
                        <tr>
                            <Bracketcell player={bracket[16][0]['player1']} color='grey'></Bracketcell>
                            <td className='round'>Quarter</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='round'>Quarter</td>
                            <Bracketcell player={bracket[16][4]['player1']} color='grey'></Bracketcell>
                        </tr>
                        <tr>
                            <td className='grey'></td>
                            <Bracketcell player={bracket[8][0]['player1']} color='light-grey'></Bracketcell>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Bracketcell player={bracket[8][2]['player1']} color='light-grey'></Bracketcell>
                            <td className='grey'></td>
                        </tr>
                        <tr>
                            <Bracketcell player={bracket[16][0]['player2']} color='grey'></Bracketcell>
                            <td className='light-grey'></td>
                            <td className='round'>Semi</td>
                            <td></td>
                            <td></td>
                            <td className='round'>Semi</td>
                            <td className='light-grey'></td>
                            <Bracketcell player={bracket[16][4]['player2']} color='grey'></Bracketcell>
                        </tr>
                        <tr>
                            <td></td>
                            <td  className='light-grey'></td>
                            <Bracketcell player={bracket[4][0]['player1']} color='grey'></Bracketcell>
                            <td></td>
                            <td></td>
                            <Bracketcell player={bracket[4][1]['player1']} color='grey'></Bracketcell>
                            <td className='light-grey'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <Bracketcell player={bracket[16][1]['player1']} color='grey'></Bracketcell>
                            <td className='light-grey'></td>
                            <td className='grey'></td>
                            <td></td>
                            <td></td>
                            <td className='grey'></td>
                            <td className='light-grey'></td>
                            <Bracketcell player={bracket[16][5]['player1']} color='grey'></Bracketcell>
                        </tr>
                        <tr>
                            <td className='grey'></td>
                            <Bracketcell player={bracket[8][0]['player2']} color='light-grey'></Bracketcell>
                            <td className='grey'></td>
                            <td></td>
                            <td></td>
                            <td className='grey'></td>
                            <Bracketcell player={bracket[8][2]['player2']} color='light-grey'></Bracketcell>
                            <td className='grey'></td>
                        </tr>
                        <tr>
                            <Bracketcell player={bracket[16][1]['player2']} color='grey'></Bracketcell> 
                            <td></td>
                            <td className='grey'></td>
                            <td className='round'>Finals</td>
                            <td className='round'>Finals</td>
                            <td className='grey'></td>
                            <td></td>
                            <Bracketcell player={bracket[16][5]['player2']} color='grey'></Bracketcell>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td className='grey'></td>
                            <Bracketcell player={bracket[2][0]['player1']} color='light-grey'></Bracketcell>
                            <Bracketcell player={bracket[2][0]['player2']} color='light-grey'></Bracketcell>
                            <td className='grey'></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <Bracketcell player={bracket[16][2]['player1']} color='grey'></Bracketcell>
                            <td></td>
                            <td className='grey'></td>
                            <td></td>
                            <td></td>
                            <td className='grey'></td>
                            <td></td>
                            <Bracketcell player={bracket[16][6]['player1']} color='grey'></Bracketcell>
                        </tr>
                        <tr>
                            <td className='grey'></td>
                            <Bracketcell player={bracket[8][1]['player1']} color='light-grey'></Bracketcell>
                            <td className='grey'></td>
                            <td></td>
                            <td></td>
                            <td className='grey'></td>
                            <Bracketcell player={bracket[8][3]['player1']} color='light-grey'></Bracketcell>
                            <td className='grey'></td>
                        </tr>
                        <tr>
                            <Bracketcell player={bracket[16][2]['player2']} color='grey'></Bracketcell>
                            <td className='light-grey'></td>
                            <td className='grey'></td>
                            <td></td>
                            <td></td>
                            <td className='grey'></td>
                            <td className='light-grey'></td>
                            <Bracketcell player={bracket[16][6]['player2']} color='grey'></Bracketcell>
                        </tr>
                        <tr>
                            <td></td>
                            <td className='light-grey'></td>
                            <Bracketcell player={bracket[4][0]['player2']} color='grey'></Bracketcell>
                            <td></td>
                            <td></td>
                            <Bracketcell player={bracket[4][1]['player2']} color='grey'></Bracketcell>
                            <td className='light-grey'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <Bracketcell player={bracket[16][3]['player1']} color='grey'></Bracketcell>
                            <td className='light-grey'></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='light-grey'></td>
                            <Bracketcell player={bracket[16][7]['player1']} color='grey'></Bracketcell>
                        </tr>
                        <tr>
                            <td className='grey'></td>
                            <Bracketcell player={bracket[8][1]['player2']} color='light-grey'></Bracketcell>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Bracketcell player={bracket[8][3]['player2']} color='light-grey'></Bracketcell>
                            <td className='grey'></td>
                        </tr>
                        <tr>
                            <Bracketcell player={bracket[16][3]['player2']} color='grey'></Bracketcell>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Bracketcell player={bracket[16][7]['player2']} color='grey'></Bracketcell>
                        </tr>
                    </tbody>
                </this.StyledBracket>
            </div>
        )
    }

}

export default Bracket;