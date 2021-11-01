import { createGlobalStyle } from "styled-components";
import LeagueSpartan from '../fonts/LeagueSpartan-Bold.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'League Spartan';
    src: url(${LeagueSpartan}) format('woff2');
    font-weight: bold;
  }
`;