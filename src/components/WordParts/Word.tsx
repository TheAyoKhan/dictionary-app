import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { WordData } from '../../domain/wordData';
import { WordText, WordPhonetic, WordOrigin, WordMeanings } from '.';
import styled from 'styled-components';

const StyledWord = styled.div`
  &.word {
    display: flex;
    flex-direction: column;

    width: 80%;
    padding: 0.5em;

    border-radius: 5px;
    box-shadow: 0 0 1px 1px #222;
  }
`;

const Word: FC<WordData> = ({ word, phonetic, phonetics, origin, meanings }) => {
  // const { requestedWord } = useParams();
  
  return (
    <StyledWord className="word">
      <WordText {...{ word }} />
      <WordPhonetic {...{ phonetic, phonetics }} />
      <WordOrigin {...{origin}} />
      <WordMeanings {...{meanings}} />
    </StyledWord>
  )
}

export default Word;