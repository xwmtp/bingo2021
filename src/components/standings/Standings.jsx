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
        display: none; // flex
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;
        span {
            font-size: 30px;
            color: var(--pink);
        }
    `

    render() {
        return (
            <this.StyledStandings>
                <this.StyledWinner>
                    <h2>2021 Tournament winner: </h2>
                    <span>?</span>
                </this.StyledWinner>
                <h2>Phase 1 - Swiss Rounds</h2>
                <Table />
            </this.StyledStandings>
        )
    }

}

export default Standings;