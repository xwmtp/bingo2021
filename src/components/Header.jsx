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

        
        @media only screen and (max-width: 550px) {
            h1 {
                font-size: 35px;
            }
            padding: 20px;
        }
    `

    render() {
     return (
         <this.StyledHeader id='header'>
             <h1>OoT Bingo Tournament 2020</h1>
         </this.StyledHeader>
     )
    }

}

export default Header;