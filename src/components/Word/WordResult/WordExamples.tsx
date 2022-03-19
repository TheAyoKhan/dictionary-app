import React from 'react';
import Typography from '@mui/material/Typography';

type WordExamplesProps = {
	examples: string[];
};

const WordExamples = ({ examples }: WordExamplesProps): JSX.Element => {
	const exampleEls = examples.map((example, i) => (
		<Typography key={`word-example-${i}`}>{example}</Typography>
	));

	return (
		<div className="word__antonym">
			<Typography variant="h6" className="examples-title">
				Examples
			</Typography>
			{exampleEls}
		</div>
	);
};

export default WordExamples;
