import React from "react";
import * as S from "./StylesPage";

import NavBottomBar from "../components/NavBottomBar/NavBottomBar";

interface CalculatorProps {}

const Calculator = ({}: CalculatorProps) => {
  return (
    <S.StyledCalculator>

      <NavBottomBar />
    </S.StyledCalculator>
  );
};

export default Calculator;
