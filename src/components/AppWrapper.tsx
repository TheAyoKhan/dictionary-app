import React from 'react';
// Non-npm imports
import App from './App';
import { DarkModeContextProvider } from '../context/DarkModeContext';

const AppWrapper = (): JSX.Element => {
	return (
		<DarkModeContextProvider>
			<App />
		</DarkModeContextProvider>
	);
};

export default AppWrapper;
