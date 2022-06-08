import React from "react";
import styled from "styled-components";

import home from "@images/home.svg";
import compass from "@images/compass.svg";
import youtubeShorts from "@images/youtubeShorts.svg";
import subscription from "@images/subscription.svg";
import store from "@images/store.svg";

const CloseMenu = () => {
  return (
    <Wrap>
      <MenuItem>
        <Icon src={home} />홈
      </MenuItem>
      <MenuItem>
        <Icon src={compass} />
        탐색
      </MenuItem>
      <MenuItem>
        <Icon src={youtubeShorts} />
        Shors
      </MenuItem>
      <MenuItem>
        <Icon src={subscription} />
        구독
      </MenuItem>
      <MenuItem>
        <Icon src={store} />
        보관함
      </MenuItem>
    </Wrap>
  );
};

export default CloseMenu;

const Wrap = styled.div`
  width: 4%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 200;
  background: #fff;
`;

const MenuItem = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  font-size: 6px;
  &:hover {
    background: ${(props) => props.theme.colors.middleGray};
  }
`;

const Icon = styled.img`
  width: 16px;
`;
