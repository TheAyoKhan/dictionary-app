import React from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import styled from '@mui/system/styled';
import { Page } from '../../../types/pages';

const StyledLink = styled(Link)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
});

const NavLink = ({ page: { name, path } }: { page: Page }): JSX.Element => (
	<StyledLink
		key={name}
		href={path}
		id={`header__${name}-link`}
		className={'header__link'}>
		<Button color="secondary">{name}</Button>
	</StyledLink>
);

export default NavLink;
