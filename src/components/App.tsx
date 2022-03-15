import React from 'react';
import { useEffect, useContext } from 'preact/hooks';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from '@mui/material/styles/styled';
import { DarkModeContext } from '../context/DarkModeContext';
import DictionaryEntryPage from './pages/DictionaryEntryPage';
import ErrorPage from './pages/ErrorPage';
import SettingsPage from './pages/SettingsPage';
import NoEntryFoundPage from './pages/NoEntryFoundPage';
import HomePage from './pages/HomePage';

const StyledApp = styled('div')`
	height: 100%;

	// Reset
	* {
		margin: 0;
		padding: 0;
		font-weight: normal;
	}

	.dm: {
		background-color: #222,
		color: #fff,
	},
`;

const App = (): JSX.Element => {
	const { darkModeEnabled, setDarkModeEnabled } = useContext(DarkModeContext);

	useEffect(() => {
		const cookiesArray = document.cookie.split('; ');
		const a = cookiesArray.find((row) => row.startsWith('darkMode='));

		if (a) setDarkModeEnabled(a?.split('=')[1] === 'true');
		else
			document.cookie = `darkMode=true; SameSite=Strict; path=/; expires=${new Date(
				new Date().getTime() + 1000 * 60 * 60 * 24 * 365
			).toUTCString()} UTC`;

		console.log({ s: document.cookie.split('; '), a });
	}, [setDarkModeEnabled]);

	return (
		<Router>
			<StyledApp id="App" className={darkModeEnabled ? 'dm' : ''}>
				<Switch>
					<Route {...{ path: '/', component: HomePage, exact: true }} />
					<Route {...{ path: '/dictionary', component: DictionaryEntryPage }} />
					<Route
						{...{
							path: '/settings',
							component: SettingsPage,
						}}></Route>
					<Route
						{...{
							path: '/no-entry-found',
							component: NoEntryFoundPage,
						}}
					/>
					<Route component={ErrorPage} />
				</Switch>
			</StyledApp>
		</Router>
	);
};

export default App;
