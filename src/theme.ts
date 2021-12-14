import { createTheme } from '@material-ui/core';

const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#364f6b',
			light: '#637b99',
			dark: '#072740',
			contrastText: '#fff',
		},
		secondary: {
			main: '#fc5185',
			light: '#ff86b4',
			dark: '#c40759',
			contrastText: '#000',
		},
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	}
});

export default theme;
