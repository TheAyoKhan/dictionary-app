import React, { FC } from 'react';
import { WordData } from '../../domain/wordData';
import { WordText, WordPhonetic, WordOrigin } from '.';
import styled from 'styled-components';

const StyledWord = styled.div`
  &.word {
    width: 50%;
    max-width: 500px;
  }
`;

const Word: FC<WordData> = ({ word, phonetic, phonetics, origin, meanings }) => {
  return (
    <StyledWord className="word">
      <WordText {...{ word }} />
      <WordPhonetic {...{ phonetic, phonetics }} />
      <WordOrigin {...{origin}} />
    </StyledWord>
  )
}

export default Word;