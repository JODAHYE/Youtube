import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { mainVideoState } from "../../states/videos";
import MainViedoItem from "./MainViedoItem";

const MainVideoList = () => {
  const mainVideoList = useRecoilValue(mainVideoState);
  return (
    <Wrap>
      {mainVideoList.map((video, i) => (
        <MainViedoItem key={i} video={video.snippet} />
      ))}
    </Wrap>
  );
};

export default MainVideoList;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  width: 100vw;
  height: 100vh;

  padding: 30px 0;

  overflow: auto;
`;
