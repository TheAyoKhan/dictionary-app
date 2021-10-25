import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../../SectionTitle';

type WordSynonymProps = {
	synonyms: string[];
};

const StyledWordSynonym = styled.div`
	&.word__synonyms {
		display: flex;
		flex-direction: column;
	}
`;

const WordSynonym = ({ synonyms }: WordSynonymProps): JSX.Element => {
	const synonymEls = synonyms.map((synonym) => (
		<span className="word__synonym" key={`word__synonym-${synonym}`}>
			{synonym}
		</span>
	));

	return (
		<StyledWordSynonym className="word__synonyms">
			<SectionTitle className="synonyms-title">Synonyms</SectionTitle>
			{synonymEls}
		</StyledWordSynonym>
	);
};

export default WordSynonym;
