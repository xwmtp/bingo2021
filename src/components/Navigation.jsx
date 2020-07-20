import styled from "styled-components";
import React from "react";
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    StyledNavigation = styled.div`
        width: 400px;
        padding: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .current{
            font-weight: bold;
            color: white;
        }
    `;

    StyledLink = styled(NavLink)`
        font-size: 25px;
        color: #C8C8C8;
        text-decoration: none;
        

    `


    render() {
     return (
         <this.StyledNavigation>
          <this.StyledLink to="/bingo2020/" activeClassName='current' exact>Standings</this.StyledLink>
          <this.StyledLink to="/bingo2020/about" activeClassName='current'>About</this.StyledLink>
         </this.StyledNavigation>
     )
    }

}

export default Navigation;