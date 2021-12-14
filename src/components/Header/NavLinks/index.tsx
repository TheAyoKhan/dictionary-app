import React from 'react';
import styled from '@mui/system/styled';
import { Pages } from '../../../types/pages';
import NavLink from './NavLink';

const StyledNav = styled('nav')({
  minWidth: '200px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const NavLinks = ({ pages }: { pages: Pages }): JSX.Element => {
	return (
		<StyledNav id="nav-links">
			{pages.map((page) => (
				<NavLink page={page} key={page.name} />
			))}
		</StyledNav>
	);
};



export default NavLinks;
