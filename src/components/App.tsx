import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DictionaryEntryPage from './pages/DictionaryEntryPage';
import SettingsPage from './pages/SettingsPage';
import GlobalStyle from './GlobalStyles';
import GlobalFonts from '../fonts/GlobalFonts'
import Header from './WordParts/Header';
import theme from '../theme';

const App = (): JSX.Element => {
	const [darkModeEnabled, setDarkModeEnabled] = useState(false);

	useEffect(() => {
		const cookiesArray = document.cookie.split("; ");
		const a = cookiesArray.find(row => row.startsWith('darkMode='));

		if (a) setDarkModeEnabled(a?.split('=')[1] === "true");
		else document.cookie = `darkTheme=false; SameSite=Strict;`;

		console.log({s: document.cookie.split("; "), a});	
	}, []);

	return (
		<ThemeProvider {...{ theme }}>
			<GlobalStyle {...{ darkModeEnabled }} />
			<GlobalFonts />
			<div className="App">
				<Router>
					<Header />
					<Switch>
						<Route
							{...{ path: '/dictionary', component: DictionaryEntryPage }}
						/>
						<Route
							{...{
								path: '/settings',
								render: () => <SettingsPage {...{ darkModeEnabled, setDarkModeEnabled }} />,
							}}
						/>
					</Switch>
				</Router>
			</div>
		</ThemeProvider>
	);
};

export default App;
