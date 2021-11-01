import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { ReactComponent as SettingsIconSvg } from '../../../images/settings-icon.svg';
import { ReactComponent as HomeIconSvg } from '../../../images/home-icon.svg';

const StyledHeader = styled.div`
	${({ theme: { headerHeight, colours } }) => `
		display: flex;
		justify-content: space-around;
		align-items: center;

		position: sticky;
		top: 0;
		background-color: white;
		border-bottom: black solid 1px;

		height: ${headerHeight}px;

		width: 100vw;

		background-color: ${colours.primary.main};

		.header__title {
			color: ${colours.dark1};

			font-family: "League Spartan";
			font-size: 2rem;
			font-weight: bold;
			margin: 0;
		}

		.header__link {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
			height: 100%;

			text-decoration: none;

			.header__link__svg {
				min-height: 32px;
				max-height: 32px;
				fill: ${colours.dark1};
			}

			.header__link__text {				
				color: ${colours.dark1};
			}

			&:hover, &:focus {
				cursor: pointer;

				#header__settings__svg {
					transition: transform 0.5s;
					transform: rotate(90deg);
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
	`}
`;

const Header = (): JSX.Element => {
	return (
		<StyledHeader className="header">
			<span className="header__title">
				AyoDictionary
			</span>
			<SearchBar />
			<Link
				{...{
					to: '/',
					id: 'header__home-link',
					className: 'header__link',
				}}>
				<HomeIconSvg {...{
					id: 'header__home__svg',
					className:'header__link__svg'
				} } />
				<span className="header__link__text" >Home</span>
			</Link>
			<Link
				{...{
					to: '/settings',
					id: 'header__settings-link',
					className: 'header__link',
				}}>
				<SettingsIconSvg {...{
					id: 'header__settings__svg',
					className:'header__link__svg'
				} } />
				<span className="header__link__text" >Settings</span>
			</Link>
		</StyledHeader>
	);
};

export default Header;
