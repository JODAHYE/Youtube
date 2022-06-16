import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { useQuery } from "react-query";

import { mainVideoState } from "../states/videos";
import CloseMenu from "../components/common/menu/CloseMenu";
import OpenMenu from "../components/common/menu/OpenMenu";
import { menuState } from "../states/menu";
import VideoAPI from "../lib/api/VideoAPI";
import MainVideoList from "../components/main/MainVideoList";
import FilterTagList from "../components/main/FilterTagList";

const Main = () => {
  const isOpenMenu = useRecoilValue(menuState);
  const setMainVideoState = useSetRecoilState(mainVideoState);

  const { data } = useQuery("mainVideoList", () => {
    return VideoAPI.getMainVideoList();
  });

  useEffect(() => {
    if (data) {
      console.log(data.data.items);
      setMainVideoState(data.data.items);
    }
  }, [data]);

  return (
    <Wrap>
      {isOpenMenu ? <OpenMenu /> : <CloseMenu />}
      <div>
        <FilterTagList />
        <MainVideoList />
      </div>
    </Wrap>
  );
};

export default Main;

const Wrap = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.lightGray};
`;
