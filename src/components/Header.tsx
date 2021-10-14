import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { ReactComponent as SettingsIconSvg } from '../settingsIcon.svg';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: black solid 1px;

  height: 80px;
  width: 100vw;

  .header__title {
    color: #222;
    
    font-size: 2.5rem;
    font-weight: 900;
    margin: 0;

    text-decoration: none;
  }

  .header__settings-button {
    height: 36px;
    width: 36px;

    &:hover {
      cursor: pointer;
   
      & > svg {
        transition: all 0.25s;
        transform: rotate(90deg);
      }
    }
  }
`;

type HeaderProps = {
  handleClick: MouseEventHandler;
};

const Header = ({ handleClick }: HeaderProps): JSX.Element => {
  return (
    <StyledHeader className="header">
      <a className="header__title" href="/">AyoDictionary</a>
      <div 
        {...{
        className:"header__settings-button",
        onClick: handleClick
        } }
      >
        <SettingsIconSvg/>
      </div>
    </StyledHeader>
  );
}

export default Header;