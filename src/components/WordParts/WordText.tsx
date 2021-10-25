import { Word } from '../../app/domain/wordData';
import React from 'react';
import styled from 'styled-components';

const StyledWordText = styled.div`
	.word__text {
		font-size: 1.5rem;
	}
`;

type WordTextProps = {
	word: Word;
};

const WordText = ({ word }: WordTextProps): JSX.Element => {
	return (
		<StyledWordText>
			<span className="word__text">{word}</span>
		</StyledWordText>
	);
};

export default WordText;
