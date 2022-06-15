import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

import { mainVideoState } from "../states/videos";
import CloseMenu from "../components/common/menu/CloseMenu";
import OpenMenu from "../components/common/menu/OpenMenu";
import { menuState } from "../states/menu";
import { videoQuery } from "../queries/videoQuery";
import Contents from "../components/main/Contents";

const Main = () => {
  const { mainVideoListQuery } = videoQuery();

  const isOpenMenu = useRecoilValue(menuState);
  const mainVideoList = useRecoilValue(mainVideoState);
  const setMainVideoState = useSetRecoilState(mainVideoState);

  useEffect(() => {
    console.log(mainVideoList);
  }, [mainVideoList]);

  if (mainVideoListQuery.data) {
    setMainVideoState(mainVideoListQuery.data.data.items);
  }

  return (
    <Wrap>
      {isOpenMenu ? <OpenMenu /> : <CloseMenu />} <Contents />
    </Wrap>
  );
};

export default Main;

const Wrap = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.lightGray};
`;
