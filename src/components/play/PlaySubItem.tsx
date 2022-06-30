import React from "react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { playingVideoState } from "../../states/video";
import { SearchVideoType } from "../../states/videoType";
import styled from "styled-components";
import { playChannelId, playVideoId } from "../../states/filter";

const PlaySubItem = ({ video }: { video: SearchVideoType }) => {
    const navigate = useNavigate();

    const setPlayingVideoState = useSetRecoilState(playingVideoState);
    const setPlayVideoId = useSetRecoilState(playVideoId);
    const setPlayChannelId = useSetRecoilState(playChannelId);

    const onPlayVideo = () => {
        setPlayingVideoState(video);
        setPlayVideoId(video.id.videoId);
        setPlayChannelId(video.snippet.channelId);
        navigate(
            `/play?v=${video.id.videoId}&ad_channel=${video.snippet.channelId}`
        );
    };

    return (
        <Wrap onClick={onPlayVideo}>
            <Thumbnail src={video.snippet.thumbnails.high.url} />
            <InfoBox>
                <Title>{video.snippet.title}</Title>
                <Info>{video.snippet.channelTitle}</Info>
                <Info>{video.snippet.publishTime}</Info>
            </InfoBox>
        </Wrap>
    );
};

export default PlaySubItem;

const Wrap = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    cursor: pointer;
`;

const Thumbnail = styled.img`
    min-width: 130px;
    height: 80px;
`;

const Title = styled.p`
    font-size: 0.75rem;
    line-height: 1.2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 2.4em;
    white-space: pre-wrap;

    margin-bottom: 6px;
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Info = styled.p`
    font-size: 0.625rem;
    line-height: 1.2em;
    color: ${(props) => props.theme.colors.darkGray};
`;
