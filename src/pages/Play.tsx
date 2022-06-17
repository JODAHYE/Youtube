import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router";
import { useRecoilValue } from "recoil";
import { playVideoIdState } from "../states/videos";
import styled from "styled-components";

const Play = () => {
    const playVideoId = useRecoilValue(playVideoIdState);

    return (
        <Wrap>
            <ReactPlayer
                className="react-player"
                url={`https://youtu.be/${playVideoId}`}
                muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
                playing={true}
                loop={true}
            />
        </Wrap>
    );
};

export default Play;

const Wrap = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;

    overflow-y: auto;
    background: ${(props) => props.theme.colors.lightGray};

    padding: 30px 90px;
    .react-player {
    }
`;
