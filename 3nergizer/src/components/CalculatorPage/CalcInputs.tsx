import React, { useState, ChangeEvent } from 'react';
import * as S from "./styles";

const Inputs: React.FC = () => {
  const [date1, setDate1] = useState<string>('');
  const [date2, setDate2] = useState<string>('');
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');

  const handleDate1Change = (e: ChangeEvent<HTMLInputElement>) => {
    setDate1(e.target.value);
  };

  const handleDate2Change = (e: ChangeEvent<HTMLInputElement>) => {
    setDate2(e.target.value);
  };

  const handleNum1Change = (e: ChangeEvent<HTMLInputElement>) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e: ChangeEvent<HTMLInputElement>) => {
    setNum2(e.target.value);
  };

  const periodoDias = Math.floor((new Date(date2).getTime() - new Date(date1).getTime()) / (1000 * 60 * 60 * 24));

  const handleButtonClick = () => {
    // Aqui você pode implementar a lógica para verificar os valores dos inputs
  };

  return (

   
    <div>
    <S.StyledDisplayWrapper>
        <S.StyledDisplaykW>
    <div>
        <h3>Consumo Atual</h3>
        <p style={{fontWeight: 'bold'}}>{`${(Number(num2) - Number(num1)).toFixed(2)} kWh`}</p>
        <p>{`Periodo: ${periodoDias} Dias`}</p>
    </div>
        </S.StyledDisplaykW>

        <S.StyledDisplayValor>
    <div>
        <h3>Valor</h3>
        <p>R$148,20</p>
    </div>
         </S.StyledDisplayValor>
    </S.StyledDisplayWrapper>


    <S.StyledInputs>
  <div>
  <label htmlFor="num1">Valor Inicial (kW):</label>
    <input type="number" id="num1" value={num1} placeholder="" onChange={handleNum1Change} />
    
   
    <label htmlFor="date2">Data atual:</label>
    <input type="date" id="date2" value={date2} placeholder="dd/mm/aaaa" onChange={handleDate2Change} />
   
  </div>

  <div>
  <label htmlFor="date1">Data inicial:</label>
    <input type="date" id="date1" value={date1} placeholder="dd/mm/aaaa" onChange={handleDate1Change} />
   

    <label htmlFor="num2">Valor Atual (kW):</label>
    <input type="number" id="num2" value={num2} placeholder="" onChange={handleNum2Change} />
  </div>

  <button type='submit' onClick={handleButtonClick}>Verificar</button>
</S.StyledInputs>

   
   
    </div>

  );
};

export default Inputs;
