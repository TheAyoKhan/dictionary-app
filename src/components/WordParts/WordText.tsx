import { Word } from '../../app/domain/wordData';
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledWordText = styled.div`
  .word__text {
    font-size: 1.5rem;
  }
`;

type WordTextTypes = {
  word: Word;
}

const WordText: FC<WordTextTypes> = ({ word }) => {
  return (
    <StyledWordText>
      <span className="word__text">{word}</span>
    </StyledWordText>
  );
}

export default WordText;