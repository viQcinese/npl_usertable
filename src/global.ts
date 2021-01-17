import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    flex-direction: column;
    align-items: center;
    margin: 0;
    height: 100vh;
    background: red;
  }
`;
