import React from "react";
import styled from "styled-components";

import notification from "@images/notification.svg";
import cloud from "@images/cloud.jpg";

const RightSection = () => {
  return (
    <Wrap>
      <Button>
        <Icon src={notification} />
      </Button>
      <ProfileImage src={cloud} />
    </Wrap>
  );
};

export default RightSection;

const Wrap = styled.div`
  display: flex;
  gap: 20px;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Button = styled.button``;

const Icon = styled.img`
  height: 24px;
`;
