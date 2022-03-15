import React from 'react';
import { useContext } from 'preact/hooks';
import styled from '@mui/system/styled';
import { DarkModeContext } from '../../context/DarkModeContext';
import Toggle from '../Toggle';
import PageTemplate from './PageTemplate';

const StyledSettingsPage = styled('div')({
	display: 'grid',
	placeItems: 'center',

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
		</PageTemplate>
	);
};

export default SettingsPage;
