import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@mui/system/styled';
import SectionTitle from '../../../SectionTitle';

type WordSynonymProps = {
	synonyms: string[];
};

const StyledWordSynonym = styled('div')({
	display: 'flex',
	flexDirection: 'column',

	'.word__synonym': {
		color: '#111',
		textDecoration: 'none',

		'&:hover': {
			textDecoration: 'underline',
		}
	}
});

const WordSynonym = ({ synonyms }: WordSynonymProps): JSX.Element => {
	const synonymEls = synonyms.map((synonym) => (
		<Link
			to={`/dictionary/${synonym}`}
			className="word__synonym"
			key={`word__synonym-${synonym}`}>
			{synonym}
		</Link>
	));

	return (
		<StyledWordSynonym className="word__synonyms">
			<SectionTitle className="synonyms-title">Synonyms</SectionTitle>
			{synonymEls}
		</StyledWordSynonym>
	);
};

export default WordSynonym;
