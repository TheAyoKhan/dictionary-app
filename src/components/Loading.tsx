import React from 'react';
import styled from '@mui/system/styled';
import { ReactComponent as LoadingIconSvg } from '../images/loading-icon.svg';

const StyledLoadingIcon = styled(LoadingIconSvg)({
	fill: '#222',
	height: '100px'
});

const Loading = (): JSX.Element => {
	return (
		<div className="loading">
			<StyledLoadingIcon className="loading-icon"/>
		</div>
	);
};

export default Loading;
