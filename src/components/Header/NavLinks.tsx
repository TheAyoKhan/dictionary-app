import React from 'react';
import Link from '@mui/material/Link';
import { ReactComponent as SettingsIconSvg } from '../../images/settings-icon.svg';
import { ReactComponent as HomeIconSvg } from '../../images/home-icon.svg';
import { styled } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const StyledLink = styled(Link)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledNav = styled('nav')({
  minWidth: '200px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const NavLinks = (): JSX.Element => {
	return (
		<StyledNav id="nav-links">
			<StyledLink
				{...{
					href: '/',
					id: 'header__home-link',
					className: 'header__link',
				}}>
				<HomeIconSvg
					{...{
						id: 'header__home__svg',
						className: 'header__link__svg',
					}}
				/>
				<Typography color="textPrimary">Home</Typography>
			</StyledLink>
      <StyledLink
				{...{
					href: '/settings',
					id: 'header__settings-link',
					className: 'header__link',
				}}>
				<SettingsIconSvg
					{...{
						id: 'header__settings__svg',
						className: 'header__link__svg',
					}}
				/>
				<Typography color="textPrimary">Settings</Typography>
			</StyledLink>
		</StyledNav>
	);
};



export default NavLinks;
