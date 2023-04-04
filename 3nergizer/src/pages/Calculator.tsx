import React from "react";
import * as S from "./StylesPage";

import NavBottomBar from "../components/NavBottomBar/NavBottomBar";

interface CalculatorProps {}

const Calculator = ({}: CalculatorProps) => {
  return (
    <S.StyledCalculatorPage>
tela de Calculator 
      <NavBottomBar />
    </S.StyledCalculatorPage>
  );
};

export default Calculator;
