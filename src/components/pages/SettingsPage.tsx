import React, { useContext } from 'react';
import styled from 'styled-components';
import Toggle from '../Toggle';
import { DarkModeContext } from '../../context/DarkModeContext';

const StyledSettingsPage = styled.div`
	display: grid;
	place-items: center;
	height: 100%;
	padding: 0.5em;
	
	.settings__list {
		width: 80%;
		height: 100%;
	}
`;

const SettingsPage = (): JSX.Element => {
	const { darkModeEnabled, setDarkModeEnabled } = useContext(DarkModeContext);

	return (
		<StyledSettingsPage className="Settings-Page">
			<div className="settings__list">
				<div id="settings__dark-mode">
					<Toggle
						{...{ name: 'Dark Mode', checked: darkModeEnabled, stateUpdateFunction: setDarkModeEnabled }}
					/>
				</div>
			</div>
		</StyledSettingsPage>
	);
};

export default SettingsPage;
