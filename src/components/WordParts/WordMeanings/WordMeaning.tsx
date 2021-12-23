import React from 'react';
import styled from '@mui/system/styled';
import WordDefinition from './WordDefinition';
import { Meaning } from '../../../app/domain/wordData';

type WordMeaningProps = {
	meaning: Meaning;
};

const StyledWordMeaning = styled('div')(({theme}) => ({
	margin: theme.spacing(1, 0),
	padding: theme.spacing(1),
	borderRadius: theme.shape.borderRadius,
	backgroundColor: '#eee',

	'.word__part-of-speech': {
		fontStyle: 'italic',
	}
}));

const WordMeaning = ({ meaning }: WordMeaningProps): JSX.Element => {
	const { partOfSpeech, definitions } = meaning;
	const definitionEls = definitions.map((definitionObj, i) => {
		return <WordDefinition {...{ definitionObj }} key={i} />;
	});

	return (
		<StyledWordMeaning className="word__meaning">
			<span className="word__part-of-speech">{partOfSpeech}</span>
			<div className="word__definitions">{definitionEls}</div>
		</StyledWordMeaning>
	);
};

export default WordMeaning;
