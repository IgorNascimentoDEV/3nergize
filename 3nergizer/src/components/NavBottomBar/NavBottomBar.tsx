import React from "react";
import * as S from "./styles";

//Navigation Bar
import ItemBottomBar from "./ItemBottomBar";

//Icons
import { AiFillHome } from "react-icons/ai";

interface NavBottomBarProps {}

const NavBottomBar = ({}: NavBottomBarProps) => {
  return (
    <S.StyledNavBottomBar>
      <ItemBottomBar>
        <AiFillHome size={35} color={"#fff"} />
      </ItemBottomBar>

      <ItemBottomBar>

      </ItemBottomBar>

      <ItemBottomBar>

      </ItemBottomBar>

      <ItemBottomBar>
        
      </ItemBottomBar>
    </S.StyledNavBottomBar>
  );
};

export default NavBottomBar;
