import React from "react";
import * as S from "./StylesPage";


//NavBottomBar
import NavBottomBar from "../components/NavBottomBar/NavBottomBar";
import Search from "../components/HomeComponents/Search";

interface HomeProps {}

const Home = ({}: HomeProps) => {

 
  return (
    <S.StyledHomePage>
      <Search amount={teste()}/>
      <NavBottomBar />
    </S.StyledHomePage>
  );
};

export function teste(): number{
  return 400;
}

export default Home;


