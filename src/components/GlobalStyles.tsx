import { createGlobalStyle } from 'styled-components';

type GlobalStylesProps = {
	darkModeEnabled: boolean;
};

export default createGlobalStyle<GlobalStylesProps>`
  ${({ darkModeEnabled, theme }) => `
    .App {
      height: 100%;
    }

    ${
      darkModeEnabled &&
      `
        .App {
          background-color: ${theme.colours.dark2};
          color: ${theme.colours.light1};
        }
      `
    }
  `}
`;
