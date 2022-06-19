import React from "react";
import styled from "styled-components";

import simsonoe from "@images/simsonoe.jpg";
import { useNavigate } from "react-router";
import { SearchVideoType } from "../../states/videoType";
import { useSetRecoilState } from "recoil";
import { playingVideoState } from "../../states/video";

const SearchViedoItem = ({ video }: { video: SearchVideoType }) => {
    const navigate = useNavigate();

    const setPlayingVideoState = useSetRecoilState(playingVideoState);

    const onPlayVideo = () => {
        setPlayingVideoState(video);
        navigate(
            `/play?v=${video.id.videoId}&ad_channel=${video.snippet.channelId}`
        );
    };

    return (
        <Wrap onClick={onPlayVideo}>
            <Thumbnail src={video.snippet.thumbnails.high.url} />
            <InfoBox>
                <Title>{video.snippet.title}</Title>
                <Info>{video.snippet.publishTime}</Info>
                <Profile>
                    <ProfileImg src={simsonoe} alt="프로필 이미지" />
                    <Info>{video.snippet.channelTitle}</Info>
                </Profile>
                <Info>{video.snippet.description}</Info>
            </InfoBox>
        </Wrap>
    );
};

export default SearchViedoItem;

const Wrap = styled.div`
    width: 60%;
    display: flex;
    gap: 20px;

    cursor: pointer;
`;

const Thumbnail = styled.img`
    min-width: 380px;
    height: 240px;
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;

    gap: 10px;

    padding: 4px;
`;

const Title = styled.p`
    font-size: 1.25rem;
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

const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const ProfileImg = styled.img`
    border-radius: 50%;
    width: 25px;
    height: 25px;
`;

const Info = styled.p`
    color: ${(props) => props.theme.colors.darkGray};
    font-size: 0.75rem;
`;
