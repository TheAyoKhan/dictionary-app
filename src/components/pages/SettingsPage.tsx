import React, { useContext } from 'react';
import styled from '@mui/system/styled';
import Toggle from '../Toggle';
import { DarkModeContext } from '../../context/DarkModeContext';

const StyledSettingsPage = styled('div')(({ theme }) => ({
	display: 'grid',
	placeItems: 'center',
	height: '100%',
	padding: theme.spacing(1),

	'.settings__list': {
		width: '80%',
		height: '100%',
	}
}));

const SettingsPage = (): JSX.Element => {
	const { darkModeEnabled, setDarkModeEnabled } = useContext(DarkModeContext);

	return (
		<StyledSettingsPage className="Settings-Page">
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
