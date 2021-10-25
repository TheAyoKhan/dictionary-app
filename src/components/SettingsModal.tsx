import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

const StyledSettingsModal = styled.div`
	display: none;
	justify-content: center;
	align-items: center;

	background-color: #eee;

	height: 25vh;
	width: 50vw;
	max-width: 500px;
	border-radius: 1em;

	position: sticky;
	top: 50px;
	left: 50%;
	z-index: 1;

	&.open {
		display: flex;
	}
`;

type SettingsModalProps = {
	isOpen: boolean;
};

const SettingsModal = ({ isOpen }: SettingsModalProps): JSX.Element => {
	return (
		<StyledSettingsModal className={clsx('settings-modal', isOpen && 'open')}>
			this is the settings modal
		</StyledSettingsModal>
	);
};

export default SettingsModal;
