import React from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled';
import { Page } from '../../../types/pages';

const StyledNavLink = styled(Link)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
});

type NavLinkProps = {
	page: Page;
};

const NavLink = ({ page: { name, path } }: NavLinkProps): JSX.Element => (
	<StyledNavLink
		key={name}
		href={path}
		id={`header__${name}-link`}
		className={'header__link'}>
		<Button color="secondary">{name}</Button>
	</StyledNavLink>
);

export default NavLink;
