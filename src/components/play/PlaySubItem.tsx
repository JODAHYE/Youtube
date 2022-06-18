import React from "react";
import styled from "styled-components";

const PlaySubItem = ({ video }: any) => {
    return (
        <Wrap>
            <InfoBox>
                <p>{video.snippet.title}</p>
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
    gap: 4px;
    border: 1px solid red;
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Info = styled.p`
    font-size: 0.625rem;
    color: ${(props) => props.theme.colors.darkGray};
`;
