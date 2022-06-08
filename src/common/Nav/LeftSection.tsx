import React from "react";
import styled from "styled-components";

const LeftSection = () => {
  return (
    <Wrap>
      <Button>
        <Icon src="assets/hamburgermenu.svg" />
      </Button>
      <Button>
        <Logo src="assets/logo.svg" />
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
