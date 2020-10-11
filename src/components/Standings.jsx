import styled from "styled-components";
import React from "react";
import Table from './Table'
import Bracket from './Bracket'

class Standings extends React.Component {

    StyledStandings = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    `

    StyledWinner = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;
        span {
            font-size: 30px;
            color: var(--yellow);
        }
    `

    render() {
        return (
            <this.StyledStandings>
                <this.StyledWinner>
                    <h2>2020 Tournament winner: </h2>
                    <span>TobJuwk</span>
                </this.StyledWinner>
                <h2>Phase 2 - Top 16 Bracket</h2>
                <Bracket />
                <h2>Phase 1 - Swiss Rounds</h2>
                <Table />
            </this.StyledStandings>
        )
    }

}

export default Standings;