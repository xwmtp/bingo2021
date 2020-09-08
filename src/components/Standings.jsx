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

    render() {
        return (
            <this.StyledStandings>
                <h2>Phase 2 - Top 16 Bracket</h2>
                <Bracket />
                <h2>Phase 1 - Swiss Rounds</h2>
                <Table />
            </this.StyledStandings>
        )
    }

}

export default Standings;