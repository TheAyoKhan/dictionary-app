import React, { FC } from 'react';
import styled from 'styled-components';
import { Definition } from '../../../../domain/wordData';
import WordAntonyms from './WordAntonym';
import WordSynonyms from './WordSynonym';

type WordDefinitionTypes = {
  definitionObj: Definition;
}

const StyledWordDefinition = styled.div`
  &.word__definition-container  {
    display: flex;
    flex-direction: column;

    margin-top: 1em;
    margin-bottom: 1em;
  }

  .word__example {
    font-style: italic;
  }
`;

const WordDefinitionContainer: FC<WordDefinitionTypes> = ({ definitionObj: definitionObj }) => {
  const { definition, example, synonyms, antonyms } = definitionObj;

  return (
    <StyledWordDefinition className="word__definition-container">
      <span className="word__definition">{definition}</span>
      <span className="word__example">“{example}”</span>
      { synonyms.length > 0 && <WordSynonyms {...{ synonyms }}/> }
      { antonyms.length > 0 && <WordAntonyms {...{ antonyms }}/> }
    </StyledWordDefinition>
  );
}

export default WordDefinitionContainer;