import React, { useEffect } from "react";
import styled from "styled-components";

const MainViedoItem = ({ video }: any) => {
  useEffect(() => {
    console.log(video.thumbnails.high.url);
  }, []);

  return (
    <Wrap>
      <Thumbnail src={video.thumbnails.high.url} />
      <InfoBox>
        <TextBox>
          <Title>{video.title}</Title>
          <Info>{video.videoOwnerChannelTitle}</Info>
          <Info>{video.publishedAt}</Info>
        </TextBox>
      </InfoBox>
    </Wrap>
  );
};

export default MainViedoItem;

const Wrap = styled.div`
  width: 310px;
  height: 290px;

  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
`;

const InfoBox = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Title = styled.p`
  font-size: 1rem;
  line-height: 1.2em;
`;

const Info = styled.p`
  font-size: 0.9375rem;
`;
