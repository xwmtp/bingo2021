import styled from "styled-components";
import React from "react";
import Table from './Table'
import Bracket from './Bracket'

class Standings extends React.Component {

    StyledHeader = styled.div`

    `

    render() {
     return (
         <>
         <h2>Phase 2 - Top 16 Bracket</h2>
         <Bracket/>
         <h2>Phase 1 - Swiss Rounds</h2>
         <Table/>
         </>
     )
    }

}

export default Standings;