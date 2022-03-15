import React from 'react';
import styled from '@mui/system/styled';
import { Pages } from '../../../types/pages';
import NavLink from './NavLink';

const StyledNav = styled('nav')(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		display: 'none',
	},
	display: 'flex',
	flexBasis: '200px',
	justifyContent: 'space-between',
	alignItems: 'center',
}));

type NavLinksProps = {
	pages: Pages;
};

const NavLinks = ({ pages }: NavLinksProps): JSX.Element => {
	return (
		<StyledNav id="nav-links">
			{pages.map((page) => (
				<NavLink page={page} key={page.name} />
			))}
		</StyledNav>
	);
};

export default NavLinks;
