import styled from "styled-components";
import React from "react";

class Header extends React.Component {

    StyledHeader = styled.div`
        padding: 30px;

        h1 {
            font-size: 50px;
            color: #ffb916;
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