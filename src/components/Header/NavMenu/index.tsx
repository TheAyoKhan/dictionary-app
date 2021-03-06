import React, { MouseEventHandler } from 'react';
import { useState } from 'preact/hooks';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Pages } from '../../../types/pages';
import NavMenuItem from './NavMenuItem';

type NavMenuProps = {
	pages: Pages;
};

const NavMenu = ({ pages }: NavMenuProps): JSX.Element => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleToggleNavMenu: MouseEventHandler<HTMLElement> = ({
		currentTarget,
	}): void => {
		setAnchorElNav(anchorElNav ? null : currentTarget);
	};

	return (
		<Box sx={{ display: { sm: 'flex', md: 'none' } }}>
			<IconButton
				size="large"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleToggleNavMenu}
				color="inherit">
				<MenuIcon />
			</IconButton>
			<Menu
				id="menu-appbar"
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={Boolean(anchorElNav)}
				onClose={handleToggleNavMenu}
				sx={{
					display: { sm: 'block', md: 'none' },
				}}>
				{pages.map((page) => (
					<NavMenuItem page={page} key={`menu-item-${page.name}`} />
				))}
			</Menu>
		</Box>
	);
};

export default NavMenu;
