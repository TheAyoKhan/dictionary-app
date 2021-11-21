import clsx from 'clsx';
import React, { useContext, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { DarkModeContext } from '../context/DarkModeContext';
import Header from './Header';
import DictionaryEntryPage from './pages/DictionaryEntryPage';
import SettingsPage from './pages/SettingsPage';

const StyledApp = styled.div`
	height: 100%;
  
  &.dm {
    background-color: #222;
    color: #fff;
  }
`;

const App = (): JSX.Element => {
	const { darkModeEnabled, setDarkModeEnabled } = useContext(DarkModeContext);

	useEffect(() => {
		const cookiesArray = document.cookie.split('; ');
		const a = cookiesArray.find((row) => row.startsWith('darkMode='));

		if (a) setDarkModeEnabled(a?.split('=')[1] === 'true');
		else document.cookie = `darkMode=true; SameSite=Strict;`;

		console.log({ s: document.cookie.split('; '), a });
	}, [setDarkModeEnabled]);

	return (
		<StyledApp className={clsx('App', darkModeEnabled && 'dm')}>
			<Router>
				<Header />
				<Switch>
					<Route {...{ path: '/dictionary', component: DictionaryEntryPage }} />
					<Route
						{...{
							path: '/settings',
							component: SettingsPage,
						}}></Route>
				</Switch>
			</Router>
		</StyledApp>
	);
};

export default App;
