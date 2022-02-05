import React from 'react';

const NoEntryFoundPage = (): JSX.Element => {
	document.title = 'No Entry | AyoDictionary';

	return (
		<div>
			<h1>Sorry!</h1>
			<h2>We couldn&apos;t find the word that you were looking for.</h2>
		</div>
	);
};

export default NoEntryFoundPage;
