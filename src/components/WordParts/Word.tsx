import React from 'react';
import styled from '@mui/system/styled';
import { WordData } from '../../app/domain/wordData';
import { WordPhonetic, WordOrigin, WordMeanings } from '.';
import { Typography } from '@mui/material';

const StyledWord = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',

	width: '80%',
	padding: theme.spacing(1),

	borderRadius: theme.shape.borderRadius,
	boxShadow: '0 0 1px 1px #222',
}));

const Word = ({
	word,
	phonetic,
	phonetics,
	origin,
	meanings,
}: WordData): JSX.Element => {
	return (
		<StyledWord className="word">
			<Typography variant="h5" className="word__text">{word}</Typography>
			<WordPhonetic {...{ phonetic, phonetics }} />
			<WordOrigin {...{ origin }} />
			<WordMeanings {...{ meanings }} />
		</StyledWord>
	);
};

export default Word;
