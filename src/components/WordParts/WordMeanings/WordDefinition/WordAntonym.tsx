import React from "react";
import styled from "styled-components";
import SectionTitle from '../../../SectionTitle';

type WordAntonymProps = {
  antonyms: string[];
};

const StyledWordAntonym = styled.div`
  display: flex;
  flex-direction: column;
`;

const WordAntonym = ({ antonyms }: WordAntonymProps): JSX.Element => {
  const antonymEls = antonyms.map((antonym) => <span className="word__antonym" key={`word__antonym-${antonym}`}>{antonym}</span>)

  return (
    <StyledWordAntonym className="word__antonym">
      <SectionTitle className="antonyms-title">Antonyms</SectionTitle>
      {antonymEls}
    </StyledWordAntonym>
  )
}

export default WordAntonym;