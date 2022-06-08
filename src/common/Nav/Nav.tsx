import React from "react";
import styled from "styled-components";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import SearchForm from "./SearchForm";

const Nav = () => {
  return (
    <Wrap>
      <LeftSection />
      <SearchForm />
      <RightSection />
    </Wrap>
  );
};

export default Nav;

const Wrap = styled.div`
  width: 100vw;
  height: 60px;

  display: flex;
  justify-content: space-between;

  padding: 12px 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.mainGray};
`;
