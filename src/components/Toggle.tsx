import styled from '@mui/system/styled';
import React, { ChangeEventHandler } from 'react';
import toCamelCase from '../utils/toCamelCase';

type ToggleProps = {
	name: string;
	checked: boolean;
	// known that its going to be a boolean because its a checkbox,
	// which is going to be either in a yes or no state
	stateUpdateFunction: React.Dispatch<React.SetStateAction<boolean>>;
};

const StyledToggle = styled('div')`
	display: flex;
	align-items: center;
	justify-content: space-around;

	font-size: 1.5rem;

	input {
		transform: scale(1.5);
	}
`;

const Toggle = ({
	name,
	checked,
	stateUpdateFunction,
}: ToggleProps): JSX.Element => {
	const nameDashed = name.toLowerCase().split(' ').join('-');

	// TODO: Make toggleFunction less dependant on React types
	const toggleFunction: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		const { checked: inputChecked } = target;
		stateUpdateFunction(inputChecked);

		const nameToCamelCase = toCamelCase(name);
		document.cookie = `${nameToCamelCase}=${inputChecked}; SameSite=Strict;`;

		console.log({ state: inputChecked, cookies: document.cookie });
	};

	return (
		<StyledToggle
			{...{
				id: `toggle-${nameDashed}-container`,
				className: 'toggle__container',
			}}>
			<label
				{...{
					className: 'toggle__label',
					htmlFor: `toggle-${nameDashed}`,
				}}>
				{name}
			</label>
			<input
				{...{
					id: `toggle-${nameDashed}`,
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
