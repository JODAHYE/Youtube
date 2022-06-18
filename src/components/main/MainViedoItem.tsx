import React from "react";
import styled from "styled-components";

import simsonoe from "@images/simsonoe.jpg";
import { useNavigate } from "react-router";

const MainViedoItem = ({ video }: any) => {
    const navigate = useNavigate();

    const onPlayVideo = () => {
        navigate(
            `/play?v=${video.resourceId.videoId}&ad_channel=${video.channelId}`
        );
    };

    return (
        <Wrap onClick={onPlayVideo}>
            <Thumbnail src={video.thumbnails.high.url} />
            <MainInfo>
                <ProfileImg src={simsonoe} />
                <Title>{video.title}</Title>
            </MainInfo>
            <SubInfo>
                <Info>{video.videoOwnerChannelTitle}</Info>
                <Info>{video.publishedAt}</Info>
            </SubInfo>
        </Wrap>
    );
};

export default MainViedoItem;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 320px;
    height: 290px;

    cursor: pointer;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 180px;
`;

const MainInfo = styled.div`
    display: flex;
    gap: 10px;
`;

const SubInfo = styled.div``;

const ProfileImg = styled.img`
    border-radius: 50%;
    width: 100px;
`;

const Title = styled.p`
    font-size: 1rem;
    line-height: 1.2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 2.4em;
    white-space: pre-wrap;
`;

const Info = styled.p`
    font-size: 0.9375rem;
    padding-left: 40px;
    line-height: 1.4em;
`;
