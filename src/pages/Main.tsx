import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { useQuery } from "react-query";

import { mainVideoState } from "../states/videos";
import CloseMenu from "../components/common/menu/CloseMenu";
import OpenMenu from "../components/common/menu/OpenMenu";
import { menuState } from "../states/menu";
import VideoAPI from "../lib/api/VideoAPI";
import MainVideoList from "../components/main/MainVideoList";
import FilterTagList from "../components/main/FilterTagList";

type StyledType = {
    isOpenMenu: boolean;
};

const Main = () => {
    const isOpenMenu = useRecoilValue(menuState);
    const setMainVideoState = useSetRecoilState(mainVideoState);

    const { data } = useQuery("mainVideoList", () => {
        return VideoAPI.getMainVideoList();
    });

    useEffect(() => {
        if (data) {
            console.log(data.data.items);
            setMainVideoState(data.data.items);
        }
    }, [data]);

    return (
        <Wrap>
            {isOpenMenu ? <OpenMenu /> : <CloseMenu />}
            <MainContainer>
                <FilterTagList />
                <MainVideoList />
            </MainContainer>
        </Wrap>
    );
};

export default Main;

const Wrap = styled.div`
    width: 100%;
    display: flex;
    background: ${(props) => props.theme.colors.lightGray};
`;

const MainContainer = styled.div<StyledType>`
    width: 100%;
    height: 100vh;

    overflow-y: auto;
    padding-bottom: 50px;
`;
