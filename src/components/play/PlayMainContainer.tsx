import React, { Suspense } from "react";
import { useLocation } from "react-router";
import YouTube from "react-youtube";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { playVideoId } from "../../states/filter";
import { playingVideoState } from "../../states/video";
import UserProfile from "./UserProfile";
import CommentList from "./CommentList";

const PlayMainContainer = () => {
    const location = useLocation();

    const playingVideoValue = useRecoilValue(playingVideoState);
    const playVideoIdValue = useRecoilValue(playVideoId);

    const opts = {
        width: "1000",
        height: "600",
        playerVars: {
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
        },
    };

    return (
        <Wrap>
            <YouTube
                videoId={location.search.split("&")[0].substring(3)}
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
                </Container>
            )}
            {playVideoIdValue && (
                <Suspense fallback={<p>로딩중</p>}>
                    <CommentList />
                </Suspense>
            )}
        </Wrap>
    );
};

export default PlayMainContainer;

const Wrap = styled.div`
    min-width: 1000px;
    width: 1000px;
    max-width: 1000px;

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
    font-size: 1rem;
`;

const Info = styled.p`
    font-size: 0.75rem;
    line-height: 1.2rem;
    padding: 10px 0 20px;
`;
