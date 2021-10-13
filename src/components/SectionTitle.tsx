import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type SectionTitleProps = {
  className: string;
  children: ReactNode;
}

const StyledSectionTitle = styled.span`
  margin-top: 0.5em;
  font-size: 1.25rem;
  font-weight: bold;
`;

const SectionTitle: FC<SectionTitleProps> = ({ className, children }) => {
  return (
    <StyledSectionTitle className={`section-title ${className}`}>{children}</StyledSectionTitle>
  );
};

export default SectionTitle;