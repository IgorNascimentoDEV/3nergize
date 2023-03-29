import React from "react";
import * as S from "./styles";

import ItemBottomBar from "./ItemBottomBar";

interface NavBottomBarProps {}

const NavBottomBar = ({}: NavBottomBarProps) => {
  return (
    <S.StyledNavBottomBar>
      <ItemBottomBar />
      <ItemBottomBar />
      <ItemBottomBar />
      <ItemBottomBar />
    </S.StyledNavBottomBar>
  );
};

export default NavBottomBar;
