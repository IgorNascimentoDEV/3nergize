import React from "react";
import * as S from "./styles";

//Navigation Bar
import ItemBottomBar from "./ItemBottomBar";

//Icons
import { AiFillHome } from "react-icons/ai";
import { AiTwotonePieChart } from "react-icons/ai"
import  {HiDocumentSearch} from "react-icons/hi"

interface NavBottomBarProps { }

const NavBottomBar = ({ }: NavBottomBarProps) => {
  return (
    <S.StyledNavBottomBar>
      <ItemBottomBar>
        <AiFillHome size={40} color={"#fff"} />
      </ItemBottomBar>
      <ItemBottomBar>
      <AiTwotonePieChart size={40} color={'#fff'} />
        </ItemBottomBar>
      <ItemBottomBar>
        <HiDocumentSearch size={40} color={'#fff'} />
      </ItemBottomBar>
    </S.StyledNavBottomBar>
  );
};

export default NavBottomBar;
