import styled from "styled-components";
import React from "react";
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {


    Navigation = styled.div`
        width: 350px;
        padding: 30px;
        display: flex;
        flex-direction: column;

        .current{
            font-weight: bold;
            color: white;
        }

        @media only screen and (max-width: 800px) {
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

        @media only screen and (max-width: 800px) {
            width: 280px;
        }

    `;

    MainLink = styled(NavLink)`
        font-size: 25px;
        color: var(--light-gray);
        text-decoration: none;
    
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
            color: var(--yellow)
        }
    `;

    RoundLink = styled(NavLink)`
        margin: 0px 15px;
        font-size: 20px;
        color: var(--light-gray);
        text-decoration: none;

    `;


    render() {
        return (
            <this.Navigation>
                <this.MainNav>
                    <this.MainLink to="/bingo2020/" activeClassName='current' exact>Standings</this.MainLink>
                    <this.MainLink to="/bingo2020/about" activeClassName='current'>About</this.MainLink>
                </this.MainNav>
                <this.RoundNav>
                    <p>Pairings:</p>
                    <this.RoundLink to="/bingo2020/round1" activeClassName='current'>Round1</this.RoundLink>
                </this.RoundNav>
            <hr/>
            </this.Navigation>
        )
    }

}

export default Navigation;