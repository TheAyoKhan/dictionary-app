import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
// Non-npm imports
import App from './App';
import GlobalFonts from '../fonts/GlobalFonts';
import theme from '../theme';
import { DarkModeContextProvider } from '../context/DarkModeContext';

const AppWrapper = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<DarkModeContextProvider>
				<GlobalFonts />
				<App />
			</DarkModeContextProvider>
		</ThemeProvider>
	);
};

export default AppWrapper;
