import React from "react";
import styled from "styled-components";

const CloseMenu = () => {
  return (
    <Wrap>
      <MenuItem>
        <Icon src="assets/home.svg" />홈
      </MenuItem>
      <MenuItem>
        <Icon src="assets/compass.svg" />
        탐색
      </MenuItem>
      <MenuItem>
        <Icon src="assets/youtube-shorts.svg" />
        Shors
      </MenuItem>
      <MenuItem>
        <Icon src="assets/subscription.svg" />
        구독
      </MenuItem>
      <MenuItem>
        <Icon src="assets/store.svg" />
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
