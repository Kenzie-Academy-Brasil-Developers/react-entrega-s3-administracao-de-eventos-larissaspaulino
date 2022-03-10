import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    :root {
      --white: #f5f5f5;
      --vanilla: #f1ede0;;
      --black: #0c0d0d;
      --grey: #666360;
      --green:#548e02;
      --darkgreen: #305100;
      --goldenyellow: #f2c71a;
      --mint: #80CEE1;
      --red: #c53030;
    }

    body {
        background-color: var(--white);
        color: var(--black);
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }

    h1, h2, h3 , h4 , h5 , h6 {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }


`
