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

        a {
            font-size: 20px;
            color: white;
            text-decoration: none;
        }
        a:hover {
            color: #D0D0D0;
        }

    `

    render() {
     return (
         <this.StyledHeader>
          <NavLink to="/bingo2020/"><a>Standings</a></NavLink>
          <NavLink to="/bingo2020/about"><a>About</a></NavLink>
         </this.StyledHeader>
     )
    }

}

export default Navigation;