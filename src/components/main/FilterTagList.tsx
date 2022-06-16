import React from "react";
import styled from "styled-components";

const FilterTagList = () => {
  return (
    <Wrap>
      <Tag>예능</Tag>
      <Tag>애니메이션</Tag>
      <Tag>동물</Tag>
    </Wrap>
  );
};

export default FilterTagList;

const Wrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 10px;

  border-bottom: 1px solid ${(props) => props.theme.colors.mainGray};
  padding: 8px;
  background: #fff;
`;

const Tag = styled.button`
  border: 1px solid ${(props) => props.theme.colors.mainGray};
  border-radius: 20px;
  padding: 6px 10px;
  background: ${(props) => props.theme.colors.middleGray};
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors.mainGray};
  }

  &:active {
    background: ${(props) => props.theme.colors.darkGray};
  }
`;
