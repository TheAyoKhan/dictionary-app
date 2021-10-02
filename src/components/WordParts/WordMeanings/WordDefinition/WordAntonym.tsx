import React, { FC } from "react";
import styled from "styled-components";

type WordAntonymTypes = {
  antonyms: string[];
};

const StyledWordAntonym = styled.div`
  &.word__antonyms {
    display: flex;
    flex-direction: column;
  }
`;

const WordAntonym: FC<WordAntonymTypes> = ({ antonyms }) => {
  const antonymEls = antonyms.map((antonym) => <span className="word__antonym" key={`word__antonym-${antonym}`}>{antonym}</span>)

  return (
    <StyledWordAntonym className="word__antonym">
      <span className="antonym__title section-title">Antonyms</span>
      {antonymEls}
    </StyledWordAntonym>
  )
}

export default WordAntonym;