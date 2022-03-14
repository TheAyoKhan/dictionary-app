import React from 'react';
import PageTemplate from './PageTemplate';

const ErrorPage = (): JSX.Element => {
	document.title = '404 - AyoDictionary';

	return (
		<PageTemplate>
			<div>
				<h1>404</h1>
				<h2>Sorry! We couldn&apos;t find what you were looking for.</h2>
			</div>
		</PageTemplate>
	);
};

export default ErrorPage;
