import React, { useContext } from 'react';
import styled from '@mui/system/styled';
import Toggle from '../Toggle';
import { DarkModeContext } from '../../context/DarkModeContext';
import Toggle from '../Toggle';
import PageTemplate from './PageTemplate';

const StyledSettingsPage = styled('div')({
	display: 'grid',
	placeItems: 'center',
	height: '100%',
	padding: theme.spacing(1),

	'.settings__list': {
		width: '80%',
		height: '100%',
	},
});

const SettingsPage = (): JSX.Element => {
	document.title = 'Settings - AyoDictionary';

	const { darkModeEnabled, setDarkModeEnabled } = useContext(DarkModeContext);

	return (
		<PageTemplate>
			<StyledSettingsPage id="Settings-Page">
				<div className="settings__list">
					<div id="settings__dark-mode">
						<Toggle
							{...{
								name: 'Dark Mode',
								checked: darkModeEnabled,
								stateUpdateFunction: setDarkModeEnabled,
							}}
						/>
					</div>
				</div>
			</StyledSettingsPage>
	);
};

export default SettingsPage;
