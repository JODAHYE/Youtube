import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";

type StyledType = {
  isActive: boolean;
};

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("");

  const inputRef = useRef(null);

  const searchInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value);
    },
    []
  );

  const clearSearchInput = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      setSearchInput("");
      inputRef.current.focus();
    },
    []
  );

  const getSearchResult = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  return (
    <Form>
      <SearchInput
        ref={inputRef}
        type="text"
        placeholder="검색"
        value={searchInput}
        onChange={searchInputChange}
      />
      {searchInput ? (
        <CloseButton onClick={clearSearchInput}>
          <Icon src="assets/close.svg" />
        </CloseButton>
      ) : (
        <CloseButton />
      )}

      <SubmitButton onClick={getSearchResult}>
        <Icon src="assets/search.svg" />
      </SubmitButton>
    </Form>
  );
};

export default SearchForm;

const Form = styled.form`
  width: 30%;
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.mainGray};
  border-radius: 4px;
`;

const SearchInput = styled.input`
  width: 85%;
  padding: 4px;
`;

const SubmitButton = styled.button`
  width: 10%;
  border-left: 1px solid ${(props) => props.theme.colors.mainGray};
  background: ${(props) => props.theme.colors.lightGray};
  &:hover {
    background: ${(props) => props.theme.colors.middleGray};
  }
`;

const Icon = styled.img`
  width: 20px;
`;

const CloseButton = styled.button`
  width: 5%;
`;
