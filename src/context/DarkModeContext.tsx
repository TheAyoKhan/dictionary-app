import React, {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';

type DarkModeContextType = {
	darkModeEnabled: boolean;
	setDarkModeEnabled: Dispatch<SetStateAction<boolean>>;
};

export const DarkModeContext = createContext<DarkModeContextType>(
	{} as DarkModeContextType
);

export const DarkModeContextProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	const [darkModeEnabled, setDarkModeEnabled] = useState(true);

	return (
		<DarkModeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>
			{children}
		</DarkModeContext.Provider>
	);
};
