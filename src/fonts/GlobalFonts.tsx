import { createGlobalStyle } from 'styled-components';
import LeagueSpartan from './LeagueSpartan-Bold.woff2';
import GlacialIndifferenceRegular from './GlacialIndifference-Regular.woff2';
import GlacialIndifferenceBold from './GlacialIndifference-Bold.woff2';
import GlacialIndifferenceItalic from './GlacialIndifference-Italic.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'League Spartan';
    src: url(${LeagueSpartan}) format('woff2');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Glacial Indifference';
    src: url(${GlacialIndifferenceRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Glacial Indifference';
    src: url(${GlacialIndifferenceBold}) format('woff2');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Glacial Indifference';
    src: url(${GlacialIndifferenceItalic}) format('woff2');
    font-style: italic;
  }
`;
