import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LoadingIconSvg } from '../loading-icon.svg';

const StyledLoading = styled.div`
	.loading-icon {
		fill: #222;
		height: 100px;
	}
`;

const Loading = (): JSX.Element => {
	return (
		<StyledLoading className="loading">
			<LoadingIconSvg className="loading-icon" />
		</StyledLoading>
	);
};

export default Loading;
