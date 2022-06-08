import React from "react";
import styled from "styled-components";

const OpenMenu = () => {
  return (
    <Wrap>
      <MenuSection>
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
      </MenuSection>
      <MenuSection>
        <MenuItem>
          <Icon src="assets/store.svg" />
          보관함
        </MenuItem>
        <MenuItem>
          <Icon src="assets/history.svg" />
          시청기록
        </MenuItem>
        <MenuItem>
          <Icon src="assets/play.svg" />내 동영상
        </MenuItem>
        <MenuItem>
          <Icon src="assets/clock.svg" />
          나중에 볼 동영상
        </MenuItem>
      </MenuSection>
    </Wrap>
  );
};

export default OpenMenu;

const Wrap = styled.div`
  width: 12%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 10px;

  z-index: 200;
  background: #fff;
`;

const MenuSection = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.mainGray};
`;

const MenuItem = styled.button`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 10px 20px;
  &:hover {
    background: ${(props) => props.theme.colors.middleGray};
  }
`;

const Icon = styled.img`
  width: 16px;
`;
