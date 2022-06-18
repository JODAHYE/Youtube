import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import close from "@images/close.svg";
import search from "@images/search.svg";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { searchInputState } from "../../../states/filter";

const SearchForm = () => {
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const [searchInput, setSearchInput] = useState("");
    const setSearchInputState = useSetRecoilState(searchInputState);

    const searchInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchInput(e.target.value);
        },
        [searchInput]
    );

    const clearSearchInput = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            setSearchInput("");
            setSearchInputState("");
            inputRef.current.focus();
        },
        [searchInput]
    );

    const getSearchResult = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            setSearchInputState(searchInput);
            navigate(`/results?search_query=${searchInput}`);
        },
        [searchInput]
    );

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
                    <Icon src={close} />
                </CloseButton>
            ) : (
                <CloseButton />
            )}

            <SubmitButton onClick={getSearchResult}>
                <Icon src={search} />
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
