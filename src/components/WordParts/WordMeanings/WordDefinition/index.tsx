import React from 'react';
import styled from '@mui/system/styled';
import { Definition } from '../../../../app/domain/wordData';
import WordAntonyms from './WordAntonym';
import WordSynonyms from './WordSynonym';
import Typography from '@mui/material/Typography';

type WordDefinitionProps = {
	definitionObj: Definition;
};

const StyledWordDefinition = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',

	margin: theme.spacing(2, 0),
	padding: theme.spacing(1),
	borderRadius: theme.shape.borderRadius,

	backgroundColor: '#ddd',

	'.word__example': {
		fontStyle: 'italic',
	}
}));

const WordDefinitionContainer = ({
	definitionObj
}: WordDefinitionProps): JSX.Element => {
	const { definition, example, synonyms, antonyms } = definitionObj;

	return (
		<StyledWordDefinition className="word__definition-container">
			<Typography className="word__definition">{definition}</Typography>
			{example && <span className="word__example">“{example}”</span>}
			{synonyms.length > 0 && <WordSynonyms {...{ synonyms }} />}
			{antonyms.length > 0 && <WordAntonyms {...{ antonyms }} />}
		</StyledWordDefinition>
	);
};

export default WordDefinitionContainer;
