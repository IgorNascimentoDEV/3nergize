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

// Captura os elementos HTML dos inputs
const kwInput = document.getElementById('numberInput1');
const dataInput = document.getElementById('dateInput1');
const kw2Input = document.getElementById('dateInput2');
const data2Input = document.getElementById('numberInput2');

// Define as chaves de armazenamento para cada input
const kwKey = 'kwData';
const dataKey = 'dateData';
const kw2Key = 'kw2Data';
const data2Key = 'date2Data';

// Adiciona um evento de mudança para cada input
kwInput.addEventListener('change', () => {
  localStorage.setItem(kwKey, kwInput.value);
});

dataInput.addEventListener('change', () => {
  localStorage.setItem(dataKey, dataInput.value);
});

kw2Input.addEventListener('change', () => {
  localStorage.setItem(kw2Key, kw2Input.value);
});

data2Input.addEventListener('change', () => {
  localStorage.setItem(data2Key, data2Input.value);
});
export default Calculator;
