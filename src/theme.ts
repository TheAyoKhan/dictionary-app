import { createTheme } from '@material-ui/core';

const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#2196f3',
			light: '#6ec6ff',
			dark: '#0069c0',
		},
		secondary: {
			main: '#ffca28',
			light: '#fffd61',
			dark: '#c79a00',
		},
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	}
});

export default theme;
