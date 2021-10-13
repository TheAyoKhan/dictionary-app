import React, { FC } from "react";
import styled from "styled-components";
import SectionTitle from "../../../SectionTitle";

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
      <SectionTitle className="synonyms-title">Synonyms</SectionTitle>
      {synonymEls}
    </StyledWordSynonym>
  )
}

export default WordSynonym;