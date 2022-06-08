import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { menuState } from "../../../states/menu";
import hamburgermenu from "../../../../public/images/hamburgermenu.svg";
import logo from "../../../../public/images/logo.svg";

const LeftSection = () => {
  const setIsOpenMenu = useSetRecoilState(menuState);

  const openMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <Wrap>
      <Button onClick={openMenu}>
        <Icon src={hamburgermenu} />
      </Button>
      <Button>
        <Logo src={logo} />
        Metube
      </Button>
    </Wrap>
  );
};

export default LeftSection;

const Wrap = styled.div`
  display: flex;
  gap: 20px;
`;

const Icon = styled.img`
  height: 24px;
`;

const Logo = styled.img`
  height: 24px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
