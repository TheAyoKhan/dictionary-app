import React from 'react';
// Material UI components
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
// Non-npm imports
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';
import SearchBar from './SearchBar';
import pages from '../../pages';

const Header = (): JSX.Element => {
	return (
		<AppBar
			{...{
				className: 'header',
				position: 'sticky',
			}}>
			<Toolbar color="black" sx={{ justifyContent: 'space-between' }}>
				<NavMenu {...{ pages }} />
				<Typography sx={{ fontWeight: '500' }} variant="h4">AyoDictionary</Typography>
				<NavLinks {...{ pages }} />
				<SearchBar />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
