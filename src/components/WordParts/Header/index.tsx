import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SettingsIconSvg } from '../../../settings-icon.svg';
import SearchBar from './SearchBar';

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	position: sticky;
	top: 0;
	background-color: white;
	border-bottom: black solid 1px;

	height: 80px;
	width: 100vw;

	background-color: #222;

	.header__title {
		color: #ddd;

		font-size: 2.5rem;
		font-weight: 900;
		margin: 0;

		text-decoration: none;

		&:hover,
		&:focus {
			color: #fff;
		}
	}

	.header__settings-button {
		height: 36px;
		width: 36px;

		& > svg {
			fill: #ddd;
		}

		&:hover {
			cursor: pointer;

			& > svg {
				transition: transform 0.5s;
				transform: rotate(95deg);
			}
		}
	}

	@media screen and (max-width: 1000px) {
		background-color: red;
	}

	@keyframes settings-icon-rotate {
		100% {
			transform: rotate(90deg);
		}
	}
`;

type HeaderProps = {
	handleClick: MouseEventHandler;
};

const Header = ({ handleClick }: HeaderProps): JSX.Element => {
	return (
		<StyledHeader className="header">
			<Link className="header__title" to="/">
				AyoDictionary
			</Link>
			<SearchBar />
			<div
				{...{
					className: 'header__settings-button',
					onClick: handleClick,
				}}>
				<SettingsIconSvg />
			</div>
		</StyledHeader>
	);
};

export default Header;
