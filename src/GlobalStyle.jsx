import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --content-bg: rgb(38,38,38);
        --yellow: rgb(255,185,22);
        --light-gray: #C8C8C8;
        --row-color: #383838;
        --row-color-lighter: #404040;
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

  .yellow {
    color: var(--yellow);
}

`;

export default GlobalStyle;
