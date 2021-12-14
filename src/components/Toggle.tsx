import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import toCamelCase from '../utils/toCamelCase';

const StyledToggle = styled.div``;

type ToggleProps = {
	name: string;
	checked: boolean;
	// known that its going to be a boolean because its a checkbox,
	// which is going to be either in a yes or no state
	stateUpdateFunction: React.Dispatch<React.SetStateAction<boolean>>;
};

const Toggle = ({
	name,
	checked,
	stateUpdateFunction,
}: ToggleProps): JSX.Element => {
	const toggleFunction: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		const { checked: inputChecked } = target;
		stateUpdateFunction(inputChecked);

		const nameToCamelCase = toCamelCase(name);
		document.cookie = `${nameToCamelCase}=${inputChecked}; SameSite=Strict;`;

		console.log({ state: inputChecked, cookies: document.cookie });
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
