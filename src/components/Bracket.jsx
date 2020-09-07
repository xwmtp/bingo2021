import styled from "styled-components";
import React from "react";


class Bracket extends React.Component {

    StyledBracket = styled.table`
        max-width: 800px;
        width: 70%;
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

        return (
            <div id='overflow'>
                <this.StyledBracket>
                    <tbody>
                        <tr>
                            <th>Top 16</th>
                            <th>Quarters</th>
                            <th>Semi</th>
                            <th>Finals</th>
                            <th>Finals</th>
                            <th>Semi</th>
                            <th>Quarters</th>
                            <th>Top 16</th>
                        </tr>
                        <tr>
                            <td className='grey'>Tob3000</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='grey'>Amateseru</td>
                        </tr>
                        <tr>
                            <td className='grey'></td>
                            <td className='light-grey'>---</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='light-grey'>---</td>
                            <td className='grey'></td>
                        </tr>
                        <tr>
                            <td className='grey'>Midboss</td>
                            <td className='light-grey'></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='light-grey'></td>
                            <td className='grey'>Shaggy</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td  className='light-grey'></td>
                            <td  className='grey'>---</td>
                            <td></td>
                            <td></td>
                            <td className='grey'>---</td>
                            <td className='light-grey'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='grey'>Bonooru_</td>
                            <td className='light-grey'></td>
                            <td className='grey'></td>
                            <td></td>
                            <td></td>
                            <td className='grey'></td>
                            <td className='light-grey'></td>
                            <td className='grey'>juwk</td>
                        </tr>
                        <tr>
                            <td className='grey'></td>
                            <td className='light-grey'>---</td>
                            <td className='grey'></td>
                            <td></td>
                            <td></td>
                            <td className='grey'></td>
                            <td className='light-grey'>---</td>
                            <td className='grey'></td>
                        </tr>
                        <tr>
                            <td className='grey'>scaramanga</td>
                            <td></td>
                            <td className='grey'></td>
                            <td></td>
                            <td></td>
                            <td className='grey'></td>
                            <td></td>
                            <td className='grey'>FantaTanked</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td className='grey'></td>
                            <td className='light-grey'>---</td>
                            <td className='light-grey'>---</td>
                            <td className='grey'></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='grey'>Chris7</td>
                            <td></td>
                            <td className='grey'></td>
                            <td></td>
                            <td></td>
                            <td className='grey'></td>
                            <td></td>
                            <td className='grey'>Titou</td>
                        </tr>
                        <tr>
                            <td className='grey'></td>
                            <td className='light-grey'>---</td>
                            <td className='grey'></td>
                            <td></td>
                            <td></td>
                            <td className='grey'></td>
                            <td className='light-grey'>---</td>
                            <td className='grey'></td>
                        </tr>
                        <tr>
                            <td className='grey'>quickkiran</td>
                            <td className='light-grey'></td>
                            <td className='grey'></td>
                            <td></td>
                            <td></td>
                            <td className='grey'></td>
                            <td className='light-grey'></td>
                            <td className='grey'>PhoenixFeather</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className='light-grey'></td>
                            <td className='grey'>---</td>
                            <td></td>
                            <td></td>
                            <td className='grey'>---</td>
                            <td className='light-grey'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='grey'>Timato</td>
                            <td className='light-grey'></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='light-grey'></td>
                            <td className='grey'>Exodus</td>
                        </tr>
                        <tr>
                            <td className='grey'></td>
                            <td className='light-grey'>---</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='light-grey'>---</td>
                            <td className='grey'></td>
                        </tr>
                        <tr>
                            <td className='grey'>Xanra</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='grey'>Link11</td>
                        </tr>
                    </tbody>
                </this.StyledBracket>
            </div>
        )
    }

}

export default Bracket;