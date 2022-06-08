import axios from "axios";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import CloseMenu from "../components/common/menu/CloseMenu";
import OpenMenu from "../components/common/menu/OpenMenu";
import { menuState } from "../states/menu";

const Main = () => {
  const isOpenMenu = useRecoilValue(menuState);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/playlistItems", {
        params: {
          part: "snippet",
          playlistId: "PLVbV9mqtfzKfge1I-S01Kw6HcP-j1E9Gr",
          maxResults: "50",
          key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);
  return <Wrap>{isOpenMenu ? <OpenMenu /> : <CloseMenu />}</Wrap>;
};

export default Main;

const Wrap = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.lightGray};
`;
