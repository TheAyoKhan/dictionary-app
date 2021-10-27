import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SectionTitle from '../../../SectionTitle';

type WordAntonymProps = {
	antonyms: string[];
};

const StyledWordAntonym = styled.div`
	display: flex;
	flex-direction: column;

	.word__antonym {
		color: #111;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const WordAntonym = ({ antonyms }: WordAntonymProps): JSX.Element => {
	const antonymEls = antonyms.map((antonym) => (
		<Link
			to={`/dictionary/${antonym}`}
			className="word__antonym"
			key={`word__antonym-${antonym}`}>
			{antonym}
		</Link>
	));

	return (
		<StyledWordAntonym className="word__antonym">
			<SectionTitle className="antonyms-title">Antonyms</SectionTitle>
			{antonymEls}
		</StyledWordAntonym>
	);
};

export default WordAntonym;
