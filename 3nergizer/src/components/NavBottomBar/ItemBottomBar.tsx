import React from "react";
import * as S from "./styles";

interface ItemBottomBarProps {
  children: React.ReactNode;
}

const ItemBottomBar = ({children}:ItemBottomBarProps) => {
  return (
    <S.StyledItemBottomBar>
      <i>{children}</i>
      <p></p>
    </S.StyledItemBottomBar>
  );
};

export default ItemBottomBar;
