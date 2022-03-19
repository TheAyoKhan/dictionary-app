import styled from '@mui/material/styles/styled';
import Switch from '@mui/material/Switch';
import { useMemo } from 'preact/hooks';
import React, { ChangeEventHandler } from 'react';
import toCamelCase from '../utils/toCamelCase';
import toDashed from '../utils/toDashed';

type ToggleProps = {
	name: string;
	checked: boolean;
	// known that its going to be a boolean because its a checkbox,
	// which is going to be either in a yes or no state
	stateUpdateFunction: React.Dispatch<React.SetStateAction<boolean>>;
};

const StyledToggle = styled('div')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
});

const Toggle = ({
	name,
	checked,
	stateUpdateFunction,
}: ToggleProps): JSX.Element => {
	const nameDashed = useMemo(() => toDashed(name), [name]);
	const nameCamelCase = useMemo(() => toCamelCase(name), [name]);

	// TODO: Make toggleFunction less dependant on React types
	const toggleFunction: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		const { checked: inputChecked } = target;
		stateUpdateFunction(inputChecked);

		document.cookie = `${nameCamelCase}=${inputChecked}; SameSite=Strict;`;

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
			{/* <input
				{...{
					id: `toggle-${nameDashed}`,
					className: 'toggle__input',
					name,
					type: 'checkbox',
					checked,
					onChange: toggleFunction,
				}}
			/> */}
			<Switch
				{...{
					id: `toggle-${nameDashed}`,
					className: 'toggle__input',
					name,
					checked,
					onChange: toggleFunction,
					color: 'secondary',
				}}
			/>
		</StyledToggle>
	);
};

export default Toggle;
