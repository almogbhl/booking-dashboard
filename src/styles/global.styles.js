import { createGlobalStyle } from "styled-components";
import {dark, steelGrey} from './constants';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Lato';
    font-weight: normal;
    font-style: normal;
    src: url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  text-decoration: none;
}

html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%;
}

body {
  background-color: ${dark};
  color: ${steelGrey};
  box-sizing: border-box;
  font-family: 'Lato' ,-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyle;
