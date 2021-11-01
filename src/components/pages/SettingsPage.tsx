import React from 'react';
import styled from 'styled-components';
import Toggle from '../Toggle';

const StyledSettingsPage = styled.div``;

type SettingsPageProps = {
	darkModeEnabled: boolean;
	setDarkModeEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingsPage = ({
	darkModeEnabled,
	setDarkModeEnabled,
}: SettingsPageProps): JSX.Element => {
	return (
		<StyledSettingsPage className="Settings-Page">
			<div id="settings__dark-mode">
				<Toggle
					{...{ name: 'Dark Mode', checked: darkModeEnabled, stateUpdateFunction: setDarkModeEnabled }}
				/>
			</div>
		</StyledSettingsPage>
	);
};

export default SettingsPage;
