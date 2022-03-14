import React from 'react';
import styled from '@mui/system/styled';
import Header from '../Header';

const StyledPageTemplate = styled('div')(({ theme }) => ({
	display: 'grid',
	flexdirection: 'column',
	placeitems: 'center',
	height: '100%',
	padding: theme.spacing(1),
}));

type PageTemplateProps = {
	children: React.ReactElement;
};

const PageTemplate = ({ children }: PageTemplateProps): React.ReactElement => {
	return (
		<>
			<Header />
			<StyledPageTemplate>{children}</StyledPageTemplate>
		</>
	);
};

export default PageTemplate;
