import styled from "styled-components";
import React from "react";
import ScheduleRow from './Schedulerow'
import Dropdown from './Dropdown'
import data from '../data/bingo2020_schedule'

class Schedule extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timezone: this.loadTimezoneDataFromStorage()['tz'],
        };
        this.updateTimezone = this.updateTimezone.bind(this)
    }

    StyledSchedule = styled.div`
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
    `

    StyledTable = styled.table`
    max-width: 750px;
    width: 70%;
    margin: 30px 0px;
    border: none;
    border-spacing: 0px;
    font-size: 15px;

    
    .grey {
        opacity: 0.3;
        -webkit-opacity: 0.3;
    }
    .monospace {
        font-family: "Ubuntu Mono", monospace;
    }

    tr:nth-child(even) {
        background-color: var(--row-color);
        .grey {
            color: yellow;
        }
    }

    td, th {
        padding: 5px 20px;
        border: none;
        vertical-align: center;
        text-align: center;
    }

    
    @media only screen and (max-width: 800px) {
        width: 95vw;     
        td, th {
            padding: 5px 10px;
        }  
    }

    @media only screen and (max-width: 550px) {
        width: 95vw;
        td, th {
            font-size: 11px;
            padding: 5px 5px;
        }       
    }

    #overflow {
        overflow-x: auto;
        white-space: nowrap;
    }


    `;

    updateTimezone(event) {
        event.persist()
        this.setState(() => {
            console.log(event)
            return { timezone: event.target.value }
        });
        console.log(`set state to ${this.state.timezone}`)

        localStorage.setItem('timezone', JSON.stringify({ 'tz': event.target.value }));
    }

    loadTimezoneDataFromStorage() {
        const storageItem = localStorage.getItem('timezone');
        const storageData = storageItem ? JSON.parse(storageItem) : { 'tz': 'UTC' };
        return storageData
    }

    render() {
        let timezone = this.state.timezone
        const available_timezones = data['timezones']
        if (timezone === undefined || !available_timezones.includes(timezone)) {
            timezone = 'UTC'
        }
        let contents = <></>


        if (timezone !== undefined) {
            const createScheduleRow = (match) => {
                let className = ''
                const offset = Date.parse(match['utc_time']) - Date.now()
                if (offset < -4197600) {
                    className = 'grey'
                }
                if (offset < -172800000) { /* 2 days. 3 days: -259200000*/
                     return
                } 

                return <ScheduleRow
                    round={match['round']}
                    name1={match['player1']['name']}
                    nation1={match['player1']['nationality']}
                    name2={match['player2']['name']}
                    nation2={match['player2']['nationality']}
                    date={match['datetime'][timezone]['date']}
                    time={match['datetime'][timezone]['time']}
                    restream={match['restream']}
                    className={className}
                    key={match['player1']['name'] + match['player2']['name']}
                />
            };
            const row_components = data['matches'].map(createScheduleRow);
            contents = (
                <this.StyledTable id='round-table'>
                    <tbody>
                        <tr>
                            <th>Player</th>
                            <th>Player</th>
                            <th>Date</th>
                            <th>Time ({timezone})</th>
                            <th>Restream</th>
                        </tr>
                        {row_components}
                    </tbody>
                </this.StyledTable>
            );
        }

        return (
            <this.StyledSchedule>
                <Dropdown timezones={available_timezones} onChange={this.updateTimezone} loadTimezone={this.loadTimezoneDataFromStorage} />
                {contents}
                <p>Only matches that were scheduled in advance are shown here. Matches may be started spontaneously by entrants.</p>
            </this.StyledSchedule>

        )
    }
}

export default Schedule;