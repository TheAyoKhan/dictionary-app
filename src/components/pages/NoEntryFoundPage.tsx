import React from 'react';
import PageTemplate from './PageTemplate';

const NoEntryFoundPage = (): JSX.Element => {
	document.title = 'No Entry | AyoDictionary';

	return (
		<PageTemplate>
			<div>
				<h1>Sorry!</h1>
				<h2>We couldn&apos;t find the word that you were looking for.</h2>
			</div>
		</PageTemplate>
	);
};

export default NoEntryFoundPage;
