import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none
  }

  input, button, body {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: #F0F2F5;
  }

  h1,h2,h3,h4,h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;
