import React from "react";
import { useRecoilValue } from "recoil";
import { playChannelId } from "../states/filter";
import styled from "styled-components";

import PlayMainContainer from "../components/play/PlayMainContainer";
import PlaySubContainer from "../components/play/PlaySubContainer";
import { menuState } from "../states/menu";
import SlideMenu from "../components/play/SlideMenu";

const Play = () => {
    const isOpenMenu = useRecoilValue(menuState);
    const playChannelIdValue = useRecoilValue(playChannelId);

    return (
        <Wrap>
            <SlideMenu />
            <PlayContainer>
                <PlayMainContainer />
                {playChannelIdValue && <PlaySubContainer />}
            </PlayContainer>
        </Wrap>
    );
};

export default Play;

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: auto;

    background: ${(props) => props.theme.colors.lightGray};
    padding: 30px 0;
`;

const PlayContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
`;
