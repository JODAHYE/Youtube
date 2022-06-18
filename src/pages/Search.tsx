import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { menuState } from "../states/menu";
import OpenMenu from "../components/common/menu/OpenMenu";
import CloseMenu from "../components/common/menu/CloseMenu";
import SearchVideoList from "../components/search/SearchVideoList";
import { searchInputState } from "../states/filter";

const Search = () => {
    const isOpenMenu = useRecoilValue(menuState);
    const searchInputValue = useRecoilValue(searchInputState);

    return (
        <Wrap>
            {isOpenMenu ? <OpenMenu /> : <CloseMenu />}
            <SearchContainer>
                {searchInputValue && <SearchVideoList />}
            </SearchContainer>
        </Wrap>
    );
};

export default Search;

const Wrap = styled.div`
    width: 100%;

    display: flex;

    background: ${(props) => props.theme.colors.lightGray};
`;

const SearchContainer = styled.div`
    width: 100%;
    height: 100vh;

    overflow-y: auto;
    padding-bottom: 50px;
`;
