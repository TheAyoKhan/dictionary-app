import React from 'react';

const ErrorPage = (): JSX.Element => {
	document.title = '404 - AyoDictionary';

	return (
		<div>
			<h1>404</h1>
			<h2>Sorry! We couldn&apos;t find what you were looking for.</h2>
		</div>
	);
};

export default ErrorPage;
