import React from 'react';
import { useContext } from 'preact/hooks';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { DarkModeContext } from '../context/DarkModeContext';
import DictionaryEntryPage from './pages/DictionaryEntryPage';
import ErrorPage from './pages/ErrorPage';
import SettingsPage from './pages/SettingsPage';
import NoEntryFoundPage from './pages/NoEntryFoundPage';
import HomePage from './pages/HomePage';
import getTheme from '../theme';

const App = (): JSX.Element => {
	const { darkModeEnabled } = useContext(DarkModeContext);
	const theme = getTheme(darkModeEnabled ? 'dark' : 'light');
	console.log(
		`%c${darkModeEnabled ? 'Dark' : 'Light'} mode enabled`,
		'color: #0f0;'
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<div
					id="App"
					className={darkModeEnabled ? 'dm' : ''}
					style={{ height: '100%' }}>
					<Switch>
						<Route {...{ path: '/', component: HomePage, exact: true }} />
						<Route
							{...{ path: '/dictionary', component: DictionaryEntryPage }}
						/>
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
				</div>
			</Router>
		</ThemeProvider>
	);
};

export default App;
