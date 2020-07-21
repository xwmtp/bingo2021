import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --content-bg: rgb(38,38,38);
        --yellow: rgb(255,185,22);
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
        overflow-y: scroll;
    }
  
    body {
        height: 100%;
        width: 100%;
        background-color: var(--content-bg);
        color: white;
        font-family: "PT Sans", sans-serif;
  }

  #root {
      display: flex;
      flex-flow: column;
      height: 100%;
  }

`;

export default GlobalStyle;
