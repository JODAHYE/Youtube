import React from "react";
import styled from "styled-components";
import she from "@images/she.png";
import { MainVideoType, SearchVideoType } from "src/states/videoType";

const UserProfile = ({ video }: { video: SearchVideoType | MainVideoType }) => {
    return (
        <Wrap>
            <ProfileImg src={she} alt="프로필이미지" />
            <div>
                <Name>{video.snippet.channelTitle}</Name>
                <SubscriptionCount>구독자 0명</SubscriptionCount>
            </div>
            <SubscriptionButton>구독</SubscriptionButton>
        </Wrap>
    );
};

export default UserProfile;

const Wrap = styled.div`
    display: flex;
    align-items: center;

    position: relative;

    padding: 12px 0;
`;

const ProfileImg = styled.img`
    border-radius: 50%;
    width: 50px;
    margin-right: 6px;
`;

const Name = styled.p`
    font-size: 0.875rem;
    margin-bottom: 4px;
`;

const SubscriptionCount = styled.p`
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.darkGray};
`;

const SubscriptionButton = styled.button`
    position: absolute;
    right: 0;

    background: #c50000;
    color: #fff;
    padding: 10px 20px;
    font-size: 0.875rem;
`;
