import React from 'react';
import styled from '@mui/material/styles/styled';
import WordAntonyms from './WordAntonyms';
import WordSynonyms from './WordSynonyms';
import Typography from '@mui/material/Typography';
import WordExamples from './WordExamples';
import { Result } from '../../../app/domain/wordData';

type WordProps = {
	result: Result;
};

const StyledWordResult = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',

	margin: theme.spacing(2, 0),
	padding: theme.spacing(1),
	borderRadius: theme.shape.borderRadius,

	backgroundColor: '#ddd',

	'& > *': {
		margin: theme.spacing(1, 0),
	},
}));

const WordResult = ({ result }: WordProps): JSX.Element => {
	const { definition, examples, synonyms, antonyms } = result;

	return (
		<StyledWordResult className="word__result">
			<Typography className="word__definition">{definition}</Typography>
			{examples?.length && <WordExamples {...{ examples }} />}
			{synonyms?.length && <WordSynonyms {...{ synonyms }} />}
			{antonyms?.length && <WordAntonyms {...{ antonyms }} />}
		</StyledWordResult>
	);
};

export default WordResult;
