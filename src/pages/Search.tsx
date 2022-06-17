import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchVideoState } from "../states/videos";
import CloseMenu from "../components/common/menu/CloseMenu";
import OpenMenu from "../components/common/menu/OpenMenu";
import { menuState } from "../states/menu";
import SearchVideoList from "../components/common/search/SearchVideoList";
import { useQuery } from "react-query";
import VideoAPI from "../lib/api/VideoAPI";

const Search = () => {
    const isOpenMenu = useRecoilValue(menuState);
    const setSearchVideoState = useSetRecoilState(searchVideoState);

    const { data } = useQuery("saerchVideoList", () => {
        return VideoAPI.getSearchVideoList(localStorage.getItem("searchValue"));
    });

    useEffect(() => {
        if (data) {
            setSearchVideoState(data.data.items);
        }
    }, [data]);

    return (
        <Wrap>
            {isOpenMenu ? <OpenMenu /> : <CloseMenu />}
            <SearchContainer>
                <SearchVideoList />
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
