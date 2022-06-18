import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import CloseMenu from "../components/common/menu/CloseMenu";
import OpenMenu from "../components/common/menu/OpenMenu";
import { menuState } from "../states/menu";
import MainVideoList from "../components/main/MainVideoList";
import FilterTagList from "../components/main/FilterTagList";
import { mainTagState } from "../states/filter";

const Main = () => {
    const isOpenMenu = useRecoilValue(menuState);
    const mainTagValue = useRecoilValue(mainTagState);

    return (
        <Wrap>
            {isOpenMenu ? <OpenMenu /> : <CloseMenu />}
            <MainContainer>
                <FilterTagList />
                {mainTagValue && <MainVideoList />}
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

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;

    overflow-y: auto;
    padding-bottom: 50px;
`;
