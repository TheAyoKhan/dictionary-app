import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SectionTitle from '../../../SectionTitle';

type WordSynonymProps = {
	synonyms: string[];
};

const StyledWordSynonym = styled.div`
	display: flex;
	flex-direction: column;

	.word__synonym {
		color: #111;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

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
