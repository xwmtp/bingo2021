import styled from "styled-components";
import React from "react";
import { NavLink } from 'react-router-dom';
import pairings from '../data/bingo2020_pairings'

class Navigation extends React.Component {

    Navigation = styled.div`
        width: 350px;
        width: 350px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;

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
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        p {
            font-size: 20px;
            color: var(--yellow);
            @media only screen and (max-width: 500px) {
            font-size: 17px;
        }
        }

    `;

    RoundLink = styled(NavLink)`
        margin: 0px 15px;
        text-decoration: none;
        font-size: 20px;
        color: var(--light-gray);
        letter-spacing: 0.1px;
        @media only screen and (max-width: 500px) {
            font-size: 17px;
        }
    `;

    render() {
        const createRoundLink = (r) => {
            return <this.RoundLink to={`/bingo2020/round/${r}`} activeClassName='current' key={r}>{`Round${r}`}</this.RoundLink>
        }

        const roundLinks = Object.keys(pairings).map(createRoundLink)


        return (
            <this.Navigation id='navigation'>
                <this.MainNav>
                    <this.MainLink to="/bingo2020/" activeClassName='current' exact>Standings</this.MainLink>
                    <this.MainLink to="/bingo2020/schedule" activeClassName='current'>Schedule</this.MainLink>
                    <this.MainLink to="/bingo2020/about" activeClassName='current'>About</this.MainLink>
                </this.MainNav>
                <this.RoundNav>
                    <p>Results:</p>
                    {roundLinks}
                </this.RoundNav>
                <hr />
            </this.Navigation>
        )
    }

}

export default Navigation;