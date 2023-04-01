import React from "react";
import * as S from "./StylesPage";

//NavBottomBar
import NavBottomBar from "../components/NavBottomBar/NavBottomBar";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <S.StyledHomePage>
      
      <NavBottomBar />
    </S.StyledHomePage>
  );
};

export default Home;
