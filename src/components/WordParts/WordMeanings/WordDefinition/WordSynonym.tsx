import React, { FC } from "react";
import styled from "styled-components";

type WordSynonymTypes = {
  synonyms: string[];
};

const StyledWordSynonym = styled.div`
  &.word__synonyms {
    display: flex;
    flex-direction: column;
  }
`;

const WordSynonym: FC<WordSynonymTypes> = ({ synonyms }) => {
  const synonymEls = synonyms.map((synonym) => <span className="word__synonym" key={`word__synonym-${synonym}`}>{synonym}</span>)

  return (
    <StyledWordSynonym className="word__synonyms">
      <span className="synonym__title section-title">Synonyms</span>
      {synonymEls}
    </StyledWordSynonym>
  )
}

export default WordSynonym;