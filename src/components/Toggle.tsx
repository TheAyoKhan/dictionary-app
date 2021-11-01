import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import toCamelCase from '../app/shared/toCamelCase';

const StyledToggle = styled.div``;

type ToggleProps = {
	name: string;
	checked: boolean;
	// known that its going to be a boolean because its a checkbox,
	// which is going to be either in a yes or no state
	stateUpdateFunction: React.Dispatch<React.SetStateAction<boolean>>;
};

const Toggle = ({ name, checked, stateUpdateFunction }: ToggleProps): JSX.Element => {
	const toggleFunction: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		const { checked } = target;
		stateUpdateFunction(checked);
		const nameToCamelCase = toCamelCase(name);
		document.cookie = `${nameToCamelCase}=${checked}; SameSite=Strict;`;
		console.log(document.cookie);
	};

	return (
		<StyledToggle className="toggle">
			<label
				{...{
					className: 'toggle__label',
					htmlFor: name,
				}}>
				{name}
			</label>
			<input
				{...{
					id: `toggle-${name}`,
					className: 'toggle__input',
					name,
					type: 'checkbox',
					checked,
					onChange: toggleFunction,
				}}
			/>
		</StyledToggle>
	);
};

export default Toggle;
