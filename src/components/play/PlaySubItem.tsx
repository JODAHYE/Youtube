import React from "react";
import { SearchVideoType } from "src/states/videoType";
import styled from "styled-components";

const PlaySubItem = ({ video }: { video: SearchVideoType }) => {
    return (
        <Wrap>
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
`;

const Thumbnail = styled.img`
    min-width: 150px;
    height: 100px;
`;

const Title = styled.p`
    font-size: 0.875rem;
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
    font-size: 0.75rem;
    line-height: 1.2em;
    color: ${(props) => props.theme.colors.darkGray};
`;
