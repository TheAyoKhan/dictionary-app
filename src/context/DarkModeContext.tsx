import React, { ReactNode } from 'react';
import { createContext } from 'preact';
import { useState, StateUpdater } from 'preact/hooks';

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
	const [darkModeEnabled, setDarkModeEnabled] = useState(true);

	return (
		<DarkModeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>
			{children}
		</DarkModeContext.Provider>
	);
};
