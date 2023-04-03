import React from "react";
import * as S from "./StylesPage";
import Calculator from "../components/HomeComponents/Calculator";

import NavBottomBar from "../components/NavBottomBar/NavBottomBar";

interface CalculatorProps {}

const CalculatorPage = ({}: CalculatorProps) => {
  return (
    <S.StyledCalculatorPage>
      <Calculator/>
     
      <NavBottomBar />
    </S.StyledCalculatorPage>
  );
};

export default CalculatorPage;
