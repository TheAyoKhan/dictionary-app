import styled from '@mui/material/styles/styled';
import React from 'react';
import Header from '../Header';

const StyledPageTemplate = styled('div')({
	minHeight: '100vh',

	'> div': {
		minHeight: '100vh',
	},
});

type PageTemplateProps = {
	children: React.ReactElement;
};

const PageTemplate = ({ children }: PageTemplateProps): React.ReactElement => {
	return (
		<StyledPageTemplate>
			<Header />
			{children}
		</StyledPageTemplate>
	);
};

export default PageTemplate;
