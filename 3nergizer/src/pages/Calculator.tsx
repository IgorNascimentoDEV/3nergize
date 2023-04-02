import React from "react";
import * as S from "./StylesPage";

import NavBottomBar from "../components/NavBottomBar/NavBottomBar";

interface CalculatorProps {}

const Calculator = ({}: CalculatorProps) => {
  return (
    <S.StyledCalculatorPage>
      pagina de calculo
      <NavBottomBar />
    </S.StyledCalculatorPage>
  );
};

export default Calculator;
