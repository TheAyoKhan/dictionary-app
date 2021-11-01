import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		borderRadius: number;
		headerHeight: number;

		colours: {
				dark1: string;
				dark2: string;
				light1: string;
				light2: string;

			primary: {
				main: string;
				light: string;
				dark: string;
			};

			secondary: {
				main: string;
				light: string;
				dark: string;
			};
		};
	}
}