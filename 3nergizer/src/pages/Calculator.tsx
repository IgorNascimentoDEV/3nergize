import React from "react";
import * as S from "./StylesPage";
import {teste} from  './ Home'

import NavBottomBar from "../components/NavBottomBar/NavBottomBar";

interface CalculatorProps {}

const Calculator = ({}: CalculatorProps) => {
  return (
    <S.StyledCalculatorPage>
      {teste()}
      <NavBottomBar />
    </S.StyledCalculatorPage>
  );
};

export default Calculator;
