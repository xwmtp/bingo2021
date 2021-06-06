import styled from "styled-components";
import React from "react";
import data from '../data/bingo2021_stats'

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
            vertical-align: middle;
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

    StyledTr = styled.tr`
        td img {
        display: inline-block;
        height: 100%;
        border-radius: 3px;
        vertical-align: middle;
    }

    #flag {
        display: flex;
        height: 18px;
        align-items: center;
        justify-content: center;
    }
`


    render() {

        const createRows = (data) => {
            let rows = []
            let i = 0
            for (var country of Object.keys(data['median'])) {
                i++

                let row = < this.StyledTr >
                    <td>{i}</td>
                    <td><div id='flag'><img src={`https://raw.githubusercontent.com/xwmtp/bingo2020/master/img/flags/${country}.png`} alt="flag" /></div></td>
                    <td>{data['median'][country]}</td>
                    <td>{data['mean'][country]}</td>
                </this.StyledTr >
                rows.push(row)
            }
            return rows
        }

        const createTable = (data) => {
            let rows = createRows(data)
            return < this.StyledTable >
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Country</th>
                        <th>Median</th>
                        <th>Average</th>
                    </tr>
                    {rows}
                </tbody>
            </this.StyledTable >

        }

        const createRoundDiv = (data) => {
            let tables = []
            for (var type of Object.keys(data)) {
                console.log(type)


                let table = createTable(data[type])
                tables.push(table)
            }
            return <div>
                <h3>{round}</h3>
                {tables}
            </div>
        }

        let table_divs = []

        for (var round of Object.keys(data)) {
            console.log(data[round])
            let table_div = createRoundDiv(data[round])
            table_divs.push(table_div)

        }




        return (
            <div id='overflow'>
                {table_divs}
            </div>
        )
    }
}

export default Table;