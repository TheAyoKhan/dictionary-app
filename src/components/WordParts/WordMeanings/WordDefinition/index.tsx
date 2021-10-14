import React from 'react';
import styled from 'styled-components';
import { Definition } from '../../../../app/domain/wordData';
import WordAntonyms from './WordAntonym';
import WordSynonyms from './WordSynonym';

type WordDefinitionProps = {
  definitionObj: Definition;
}

const StyledWordDefinition = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1em;
  margin-bottom: 1em;
  padding: 0.5em;
  border-radius: 8px;

  background-color: #ddd;

  .word__example {
    font-style: italic;
  }
`;

const WordDefinitionContainer = ({ definitionObj: definitionObj }: WordDefinitionProps): JSX.Element => {
  const { definition, example, synonyms, antonyms } = definitionObj;

  return (
    <StyledWordDefinition className="word__definition-container">
      <span className="word__definition">{definition}</span>
      { example && <span className="word__example">“{example}”</span> }
      { synonyms.length > 0 && <WordSynonyms {...{ synonyms }}/> }
      { antonyms.length > 0 && <WordAntonyms {...{ antonyms }}/> }
    </StyledWordDefinition>
  );
}

export default WordDefinitionContainer;