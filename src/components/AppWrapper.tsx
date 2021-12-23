import React from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
// Non-npm imports
import App from './App';
import theme from '../theme';
import { DarkModeContextProvider } from '../context/DarkModeContext';

const AppWrapper = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<DarkModeContextProvider>
				<App />
			</DarkModeContextProvider>
		</ThemeProvider>
	);
};

export default AppWrapper;
