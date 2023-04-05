import React from "react";
import * as S from "./StylesPage";

import NavBottomBar from "../components/NavBottomBar/NavBottomBar";

interface CalculatorProps {}

const Calculator = ({}: CalculatorProps) => {

  return (
    <S.StyledCalculator>
      <form >
      <div>
        <label htmlFor="dateInput1">Data 1:</label>
        <input type="date" id="dateInput1"  />
      </div>
      <div>
        <label htmlFor="numberInput1">KW Inicial 1:</label>
        <input type="number" id="numberInput1"  />
      </div>
      <div>
        <label htmlFor="dateInput2">Data 2:</label>
        <input type="date" id="dateInput2"  />
      </div>
      <div>
        <label htmlFor="numberInput2">KW Inicial 2:</label>
        <input type="number" id="numberInput2" />
      </div>
      
      <button type="submit">Enviar</button>
    
    <div>O resultado é: </div>
    </form>

      <NavBottomBar />
    </S.StyledCalculator>
  );
};

export default Calculator;
