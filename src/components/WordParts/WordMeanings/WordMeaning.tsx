import React, { FC } from "react";
import styled from "styled-components";
import WordDefinition from "./WordDefinition";
import { Meaning } from "../../../domain/wordData";

type WordMeaningTypes = {
  meaning: Meaning;
};

const StyledWordMeaning = styled.div`
  &.word__meaning {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding: 0.5em;
    border-radius: 8px;
    background-color: #eee;
  }

  .word__part-of-speech {
    font-weigth: bold;
    font-style: italic;
  }
`;

const WordMeaning: FC<WordMeaningTypes> = ({ meaning }) => {
  const { partOfSpeech, definitions } = meaning;
  const definitionEls = definitions.map((definitionObj, i) => {
    return <WordDefinition {...{ definitionObj }} key={i}/>
  });

  return (
    <StyledWordMeaning className="word__meaning">
      <span className="word__part-of-speech">{partOfSpeech}</span>
      <div className="word__definitions">{definitionEls}</div>
    </StyledWordMeaning>
  );
}

export default WordMeaning;