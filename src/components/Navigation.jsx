import styled from "styled-components";
import React from "react";
import { NavLink } from 'react-router-dom';
import pairings from '../data/bingo2020_pairings'
import bracket from '../data/bingo2020_bracket'

class Navigation extends React.Component {

    Navigation = styled.div`
        width: 350px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;

        .current{
            font-weight: bold;
            color: white;
            letter-spacing: 0px; 
        }

        @media only screen and (max-width: 500px) {
            width: 280px;
        }
        hr {
            border: 1px solid var(--row-color);
            margin: 10px 0px;
        }
    `;

    MainNav = styled.div`
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media only screen and (max-width: 500px) {
            width: 280px;
        }
    `;

    MainLink = styled(NavLink)`
        font-size: 25px;
        color: var(--light-gray);
        text-decoration: none;
        @media only screen and (max-width: 500px) {
            font-size: 22px;
        }
    `;

    RoundNav = styled.div`
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        p {
            font-size: 20px;
            white-space: nowrap;
            color: var(--yellow);
            @media only screen and (max-width: 500px) {
            font-size: 17px;
        }
        }

    `;

    RoundLink = styled(NavLink)`
        margin: 0px 10px;
        text-decoration: none;
        text-transform: capitalize;
        font-size: 20px;
        color: var(--light-gray);
        letter-spacing: 0.1px;
        @media only screen and (max-width: 500px) {
            font-size: 17px;
        }
    `;

    render() {
        const createPhase1Link = (r) => {
            return <this.RoundLink to={`/round/${r}`} activeClassName='current' key={r}>{`Round${r}`}</this.RoundLink>
        }

        const createPhase2Link = (r) => {
            return <this.RoundLink to={`/round/${r}`} activeClassName='current' key={r}>{`${r}`}</this.RoundLink>
        }


        const numToBracketRound = {
            16 : 'top16',
            8 : 'quarters',
            4 : 'semis',
            2 : 'finals'
        }

        const phase1Links = Object.keys(pairings).map(createPhase1Link)

        const phase2Rounds = Object.keys(bracket).reverse().map(x => numToBracketRound[x])
        const phase2Links = phase2Rounds.map(createPhase2Link)



        return (
            <this.Navigation id='navigation'>
                <this.MainNav>
                    <this.MainLink to="/" activeClassName='current' exact>Standings</this.MainLink>
                    <this.MainLink to="/schedule" activeClassName='current'>Schedule</this.MainLink>
                    <this.MainLink to="/about" activeClassName='current'>About</this.MainLink>
                </this.MainNav>
                <hr/>
                <this.RoundNav>
                    <p>Phase 1:</p>
                    {phase1Links}
                </this.RoundNav>
                <this.RoundNav>
                    <p>Phase 2:</p>
                    {phase2Links}
                </this.RoundNav>
                <hr />
            </this.Navigation>
        )
    }

}

export default Navigation;