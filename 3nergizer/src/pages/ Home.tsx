import React from "react";
import * as S from "./StylesPage";


//NavBottomBar
import NavBottomBar from "../components/NavBottomBar/NavBottomBar";
import Search from "../components/HomeComponents/Search";
import Apresentation from "../components/HomeComponents/Apresentation";
import BottomSearch from '../components/HomeComponents/BottomSearch';


interface HomeProps {}

const Home = ({}: HomeProps) => {

 
  return (
    <S.StyledHomePage>
      <Search amount={teste()}/>
        <Apresentation/>
        <BottomSearch/>
      <NavBottomBar />
    </S.StyledHomePage>
  );
};

export function teste(): number{
  return 50;
}

export default Home;


