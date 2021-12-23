import React, { ReactNode } from 'react';
import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';

type SectionTitleProps = {
	className: string;
	children: ReactNode;
};

const StyledSectionTitle = styled(Typography)(({theme}) => ({
	marginTop: theme.spacing(1),
	fontSize: '1.25em',
	fontWeight: 'bold',
}));

const SectionTitle = ({
	className,
	children,
}: SectionTitleProps): JSX.Element => {
	return (
		<StyledSectionTitle className={`section-title ${className}`}>
			{children}
		</StyledSectionTitle>
	);
};

export default SectionTitle;
