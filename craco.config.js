/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */

module.exports = {
	webpack: {
		alias: {
			react: 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
			'react-dom': 'preact/compat', // Must be below test-utils
			'react/jsx-runtime': 'preact/jsx-runtime',
		},
	},
};
