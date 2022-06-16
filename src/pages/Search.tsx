import React from "react";
import { useRecoilValue } from "recoil";
import CloseMenu from "../components/common/menu/CloseMenu";
import OpenMenu from "../components/common/menu/OpenMenu";
import { menuState } from "../states/menu";

const Search = () => {
  const isOpenMenu = useRecoilValue(menuState);
  return <div> {isOpenMenu ? <OpenMenu /> : <CloseMenu />}</div>;
};

export default Search;
