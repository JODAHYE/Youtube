import React, { useEffect } from "react";
import { useLocation } from "react-router";
import YouTube from "react-youtube";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { playChannelId } from "../../states/filter";
import { playingVideoState } from "../../states/video";
import UserProfile from "./UserProfile";
import CommentList from "./CommentList";

const PlayMainContainer = () => {
    const location = useLocation();

    const playVieoId = location.search.split("&")[0].substring(3);

    const setPlayChannelId = useSetRecoilState(playChannelId);
    const playingVideoValue = useRecoilValue(playingVideoState);

    useEffect(() => {
        setPlayChannelId(location.search.split("&")[1]);
    }, []);

    const opts = {
        width: "1280",
        height: "710",
        playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
        },
    };
    return (
        <Wrap>
            <YouTube
                videoId={playVieoId}
                opts={opts}
                onEnd={(e) => {
                    e.target.stopVideo(0);
                }}
            />
            {playingVideoValue && (
                <Container>
                    <MainInfoBox>
                        <Title>{playingVideoValue.snippet.title}</Title>
                        <Info>{playingVideoValue.snippet.publishedAt}</Info>
                    </MainInfoBox>
                    <SubInfoBox>
                        <UserProfile video={playingVideoValue} />
                        <Info>{playingVideoValue.snippet.description}</Info>
                    </SubInfoBox>
                    <CommentList />
                </Container>
            )}
        </Wrap>
    );
};

export default PlayMainContainer;

const Wrap = styled.div`
    width: 1280px;

    padding: 0 0 100px;
`;

const Container = styled.div`
    padding: 20px 0;
`;

const MainInfoBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const SubInfoBox = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    border: 1px solid ${(props) => props.theme.colors.mainGray};
    border-left: none;
    border-right: none;
`;

const Title = styled.p`
    font-size: 1.25rem;
`;

const Info = styled.p`
    font-size: 0.875rem;
    line-height: 1.2rem;
    padding: 10px 0 20px;
`;
