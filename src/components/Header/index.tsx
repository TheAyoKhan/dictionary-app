import React from 'react';
// Material UI components
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// Material UI Icons
import MenuIcon from '@mui/icons-material/Menu';
// Non-npm imports
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import pages from '../../pages';

const Header = (): JSX.Element => {
	return (
		<AppBar
			{...{
				className: 'header',
				position: 'sticky',
			}}>
			<Toolbar sx={{ justifyContent: 'space-around' }}>
				<Typography variant="h4">AyoDictionary</Typography>
				<NavLinks {...{ pages }} />
				<SearchBar />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
