import React, { KeyboardEventHandler } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StlyedSearchBar = styled.div`
  width: 40%;
  height: 30%;
  border: 1px solid #222;
  border-radius: 5px;
  margin: 50px;

  .search-bar__input {
    width: calc(100% - 4px);
    height: calc(100% - 2px);
    border: none;
    background-color: #ddd;
    text-align: center;
    border-radius: 5px;

    &:focus {
      background-color: #fff;
      outline: none;
    }
  }
`;

const SearchBar = (): JSX.Element => {
  const history = useHistory();

  const KeyPressHandler: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;
    if (event.code === "Enter" || event.code === "NumpadEnter" && value.length) {
      // target.value likely does not work because the target might not always be the htmlinputelement
      history.push(`/dictionary/${value}`);
    };
  };

  return (
    <StlyedSearchBar className="search-bar">
      <input className="search-bar__input" placeholder="What word would you like defined?" onKeyPress={KeyPressHandler}></input>
    </StlyedSearchBar>
  );
};

export default SearchBar;