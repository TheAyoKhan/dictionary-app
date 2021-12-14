import React, { KeyboardEventHandler, MouseEventHandler, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
	[theme.breakpoints.down('xs')]: {
		display: 'none',
	},
	display: 'flex',
	width: '100%',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	flexBasis: '400px',
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
	width: '100%',
	// height: '100%',
}));

const SearchBar = (): JSX.Element => {
	const history = useHistory();
	const inputRef = useRef<HTMLInputElement>(null);

	const keyPressHandler: KeyboardEventHandler<HTMLDivElement> = ({ code }) => {
		// "as HTMLInputElement" is used to make TypeSript think the ovject type is an HTMLInputElement, which doesn't have a value property
		const { value } = inputRef.current ?? ({} as HTMLInputElement);
		if (code === 'Enter' || code === 'NumpadEnter') searchHandler(value ?? '');
	};

	const searchButtonClickHandler: MouseEventHandler<HTMLButtonElement> = () => {
		const { value } = inputRef.current ?? ({} as HTMLInputElement);
		searchHandler(value ?? '');
	};

	const searchHandler = (query: string) => {
		if (query?.length) history.push(`/dictionary/${query}`);
	};

	return (
		<Search className="search-bar">
			<IconButton onClick={searchButtonClickHandler}>
				<SearchIcon />
			</IconButton>
			<StyledInput
				{...{
					inputRef,
					className: 'search-bar__input',
					placeholder: 'What would you liked defined?',
					onKeyPress: keyPressHandler,
				}}
			/>
		</Search>
	);
};

export default SearchBar;
