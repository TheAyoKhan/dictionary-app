import React, { FC } from "react";
import styled from "styled-components";
import SectionTitle from '../../../SectionTitle';

type WordAntonymTypes = {
  antonyms: string[];
};

const StyledWordAntonym = styled.div`
  display: flex;
  flex-direction: column;
`;

const WordAntonym: FC<WordAntonymTypes> = ({ antonyms }) => {
  const antonymEls = antonyms.map((antonym) => <span className="word__antonym" key={`word__antonym-${antonym}`}>{antonym}</span>)

  return (
    <StyledWordAntonym className="word__antonym">
      <SectionTitle className="antonyms-title">Antonyms</SectionTitle>
      {antonymEls}
    </StyledWordAntonym>
  )
}

export default WordAntonym;