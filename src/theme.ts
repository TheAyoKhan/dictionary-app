import createTheme from '@mui/material/styles/createTheme';
import { PaletteMode } from '@mui/material';

export const themePalette = {
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
};

const getTheme = (mode: PaletteMode) =>
	createTheme({
		palette: {
			mode,
			...themePalette,
		},
		typography: {
			fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		},
	});

export default getTheme;
