import React from "react";
import { useRecoilValue } from "recoil";
import { playChannelId } from "../states/filter";
import styled from "styled-components";

import PlayMainContainert from "../components/play/PlayMainContainert";
import PlaySubContainer from "../components/play/PlaySubContainer";

const Play = () => {
    const playChannelIdValue = useRecoilValue(playChannelId);

    return (
        <Wrap>
            <PlayMainContainert />
            {playChannelIdValue && <PlaySubContainer />}
        </Wrap>
    );
};

export default Play;

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: auto;

    display: flex;
    justify-content: center;
    gap: 30px;

    background: ${(props) => props.theme.colors.lightGray};
    padding: 30px 0;
`;
