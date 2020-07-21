import styled from "styled-components";
import React from "react";

class Header extends React.Component {

    StyledHeader = styled.div`
        padding: 30px;

        h1 {
            text-align: center;
            font-size: 50px;
            color: var(--yellow);
        }
    `

    render() {
     return (
         <this.StyledHeader>
             <h1>OoT Bingo Tournament 2020</h1>
         </this.StyledHeader>
     )
    }

}

export default Header;