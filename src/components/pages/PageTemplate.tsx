import React from 'react';
import Header from '../Header';

type PageTemplateProps = {
	children: React.ReactElement;
};

const PageTemplate = ({ children }: PageTemplateProps): React.ReactElement => {
	return (
		<div>
			<Header />
			<div id="page-content">{children}</div>
		</div>
	);
};

export default PageTemplate;
