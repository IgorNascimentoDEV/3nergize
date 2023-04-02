import React from "react";
import * as S from "./styles";

//Navigation Bar
import ItemBottomBar from "./ItemBottomBar";

//Icons
import { AiFillHome } from "react-icons/ai";
import { AiTwotonePieChart } from "react-icons/ai";
import { HiDocumentSearch } from "react-icons/hi";

//routes
import { Link } from "react-router-dom";

interface NavBottomBarProps {}

const NavBottomBar = ({}: NavBottomBarProps) => {
  return (
    <S.StyledNavBottomBar>
      <Link to="/">
        {/*Home icon*/}
        <ItemBottomBar name="Home">
          <AiFillHome size={40} color={"#fff"} />
        </ItemBottomBar>
      </Link>

      <Link to="/Calculator">
        {/*Calculator icon*/}
        <ItemBottomBar name="Calculator">
          <AiTwotonePieChart size={40} color={"#fff"} />
        </ItemBottomBar>
      </Link>

      <Link to="/Analysis">
        {/*Analysis icon*/}
        <ItemBottomBar name="Analysis">
          <HiDocumentSearch size={40} color={"#fff"} />
        </ItemBottomBar>
      </Link>
    </S.StyledNavBottomBar>
  );
};

export default NavBottomBar;
