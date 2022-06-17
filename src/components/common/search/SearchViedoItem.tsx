import React from "react";
import styled from "styled-components";

import simsonoe from "@images/simsonoe.jpg";

const SearchViedoItem = ({ video }: any) => {
    return (
        <Wrap>
            <Thumbnail src={video.thumbnails.high.url} />
            <InfoBox>
                <Title>{video.title}</Title>
                <Info>{video.publishTime}</Info>
                <Profile>
                    <ProfileImg src={simsonoe} />
                    <Info>{video.channelTitle}</Info>
                </Profile>
                <Info>{video.description}</Info>
            </InfoBox>
        </Wrap>
    );
};

export default SearchViedoItem;

const Wrap = styled.div`
    width: 60%;
    display: flex;
    gap: 20px;
`;

const Thumbnail = styled.img`
    width: 380px;
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
