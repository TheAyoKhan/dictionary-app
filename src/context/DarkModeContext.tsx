import React, { ReactNode } from 'react';
import { createContext } from 'preact';
import { useState, StateUpdater } from 'preact/hooks';
import { useMediaQuery } from '@mui/material';

type DarkModeContextType = {
	darkModeEnabled: boolean;
	setDarkModeEnabled: StateUpdater<boolean>;
};

export const DarkModeContext = createContext<DarkModeContextType>(
	{} as DarkModeContextType
);

type DarkModeContextProviderProps = {
	children: ReactNode;
};

export const DarkModeContextProvider = ({
	children,
}: DarkModeContextProviderProps): JSX.Element => {
	// Split the cookies into an array of strings
	const cookiesArray = document.cookie.split('; ');
	// Check if the cookie is already set, and if it is grab it
	const darkModeCookie = cookiesArray.find((row) =>
		row.startsWith('darkMode=')
	);
	const darkModeCookieValue = darkModeCookie
		? darkModeCookie.split('=')[1]
		: null;
	// Get the system for dark mode preference
	const systemPrefersDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');
	//
	let prefersDarkTheme: boolean;

	if (darkModeCookieValue) prefersDarkTheme = darkModeCookieValue === 'true';
	else {
		document.cookie = `darkMode=${systemPrefersDarkTheme}; SameSite=Strict; path=/; expires=${new Date(
			new Date().getTime() + 1000 * 60 * 60 * 24 * 365
		).toUTCString()} UTC`;
		prefersDarkTheme = systemPrefersDarkTheme;
	}

	console.log({ c: document.cookie.split('; ') });

	const [darkModeEnabled, setDarkModeEnabled] = useState(prefersDarkTheme);

	return (
		<DarkModeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>
			{children}
		</DarkModeContext.Provider>
	);
};
