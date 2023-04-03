import React, { useState } from "react";
import * as S from "./styles";


const CalculatorKW = ({ onSubmit = () => {} }) => {

  const [date1, setDate1] = useState(localStorage.getItem("date1") || "");
  const [number1, setNumber1] = useState(localStorage.getItem("number1") || 0);
  const [date2, setDate2] = useState("");
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(localStorage.getItem('calcResult') || 0);

  
  const handleDateChange1 = (event:any) => {
    setDate1(event.target.value);
    localStorage.setItem("date1", event.target.value);
  };
  
  
  const handleNumberChange1 = (event:any) => {
    setNumber1(event.target.value);
    localStorage.setItem("number1", event.target.value);
  };
  
  const handleDateChange2 = (event:any) => {
    setDate2(event.target.value);
  };
  
  const handleNumberChange2 = (event:any) => {
    setNumber2(event.target.value);
  };
  
  const handleSubmit = (event:any) => {
    event.preventDefault();
    let calcResult = number2 - number1;
    setResult(calcResult);
    onSubmit({ date1, number1, date2, number2 });
    localStorage.setItem('calcResult', "");
    
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="dateInput1">Data 1:</label>
        <input type="date" id="dateInput1" value={date1} onChange={handleDateChange1} />
      </div>
      <div>
        <label htmlFor="numberInput1">KW Inicial 1:</label>
        <input type="number" id="numberInput1" value={number1} onChange={handleNumberChange1} />
      </div>
      <div>
        <label htmlFor="dateInput2">Data 2:</label>
        <input type="date" id="dateInput2" value={date2} onChange={handleDateChange2} />
      </div>
      <div>
        <label htmlFor="numberInput2">KW Inicial 2:</label>
        <input type="number" id="numberInput2" value={number2} onChange={handleNumberChange2} />
      </div>
      <S.Styledbutton>
      <button type="submit">Enviar</button>
      </S.Styledbutton>
      {result && <div>O resultado é: {result}</div>}
    </form>
  );
};

export default CalculatorKW;
