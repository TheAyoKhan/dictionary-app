import React from 'react';
import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';

type WordExamplesProps = {
	examples: string[];
};

const StyledWordExamples = styled('div')``;

const WordExamples = ({ examples }: WordExamplesProps): JSX.Element => {
	const exampleEls = examples.map((example, i) => (
		<Typography key={`word-example-${i}`}>{example}</Typography>
	));

	return (
		<StyledWordExamples className="word__antonym">
			<Typography variant="h6" className="examples-title">
				Examples
			</Typography>
			{exampleEls}
		</StyledWordExamples>
	);
};

export default WordExamples;
