import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Page } from '../../../types/pages';
import { Link } from '@mui/material';

type NavMenuItemProps = {
	page: Page;
};

const NavMenuItem = ({
	page: { name, path },
}: NavMenuItemProps): JSX.Element => (
	<MenuItem>
		<Link textAlign="center" href={path}>
			{name}
		</Link>
	</MenuItem>
);

export default NavMenuItem;
