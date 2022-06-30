import React, { Suspense, useEffect, useLayoutEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { playChannelId, playVideoId } from "../states/filter";
import styled from "styled-components";

import PlayMainContainer from "../components/play/PlayMainContainer";
import PlaySubContainer from "../components/play/PlaySubContainer";
import { menuState } from "../states/menu";
import SlideMenu from "../components/play/SlideMenu";
import { playingVideoState } from "../states/video";

const Play = () => {
    const isOpenMenu = useRecoilValue(menuState);
    const playChannelIdValue = useRecoilValue(playChannelId);
    const setPlayChannelId = useSetRecoilState(playChannelId);
    const setPlayVideoId = useSetRecoilState(playVideoId);

    useLayoutEffect(() => {
        setPlayChannelId(location.search.split("&")[1]);
        setPlayVideoId(location.search.split("&")[0].substring(3));
    }, []);

    return (
        <Wrap>
            {/* <SlideMenu /> */}
            <PlayContainer>
                <PlayMainContainer />
                {playChannelIdValue && (
                    <Suspense fallback={<p>로딩중</p>}>
                        <PlaySubContainer />
                    </Suspense>
                )}
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
