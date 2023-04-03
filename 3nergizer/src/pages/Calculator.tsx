import React from "react";
import * as S from "./StylesPage";
import CalculatorKW from "../components/HomeComponents/CalculatorKW";
import NavBottomBar from "../components/NavBottomBar/NavBottomBar";

interface CalculatorProps {}

const Calculator = ({}: CalculatorProps) => {
  return (
    <S.StyledCalculatorPage>
      <CalculatorKW/>
     
      <NavBottomBar />
    </S.StyledCalculatorPage>
  );
};

export default Calculator;
