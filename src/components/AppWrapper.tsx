import React from 'react';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalFonts from '../fonts/GlobalFonts';
import theme from '../theme';
import { DarkModeContextProvider } from '../context/DarkModeContext';


const AppWrapper = (): JSX.Element => {
	return (
		<DarkModeContextProvider>
			<ThemeProvider {...{ theme }}>
				<GlobalFonts />
				<App />
			</ThemeProvider>
		</DarkModeContextProvider>
	);
};

export default AppWrapper;
