import styled from "styled-components";
import React from "react";
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    StyledHeader = styled.div`
        width: 400px;
        padding: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `;

    StyledLink = styled(NavLink)`
        font-size: 25px;
        color: white;
        text-decoration: none;
        
        :hover {
            color: #C8C8C8;
        }
    `


    render() {
     return (
         <this.StyledHeader>
          <this.StyledLink to="/bingo2020/">Standings</this.StyledLink>
          <this.StyledLink to="/bingo2020/about">About</this.StyledLink>
         </this.StyledHeader>
     )
    }

}

export default Navigation;