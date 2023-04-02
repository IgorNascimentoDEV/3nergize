import React from "react";
import * as S from "./StylesPage";

//NavBottomBar
import NavBottomBar from "../components/NavBottomBar/NavBottomBar";
import Search from "../components/HomeComponents/Search";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <S.StyledHomePage>
      <Search amount={'25,32'}/>
      <NavBottomBar />
    </S.StyledHomePage>
  );
};

export default Home;
