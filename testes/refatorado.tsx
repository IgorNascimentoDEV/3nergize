import React, { useState } from 'react';

const ContaDeEnergia = () => {
  const [leituraInicial, setLeituraInicial] = useState(0);
  const [dataInicial, setDataInicial] = useState('');
  const [leituraFinal, setLeituraFinal] = useState(0);
  const [dataFinal, setDataFinal] = useState('');

  // Define as tarifas de energia elétrica
  const tarifaBase = 0.9;
  const tarifaConsumo = 0.05;
  const taxaIluminacao = 0.06;

  // Adiciona um evento de mudança para o botão de calcular
  const handleClick = () => {
    // Converte os valores dos inputs para números
    const leituraInicialNumber = Number(leituraInicial);
    const leituraFinalNumber = Number(leituraFinal);
    const dataInicialDate = new Date(dataInicial);
    const dataFinalDate = new Date(dataFinal);

    // Calcula a quantidade de dias entre as datas de leitura
    const periodoDias = Math.ceil((dataFinalDate.getTime() - dataInicialDate.getTime()) / (1000 * 60 * 60 * 24));

    // Calcula o consumo de energia em kWh
    const consumo = leituraFinalNumber - leituraInicialNumber;

    // Calcula o valor da conta de energia elétrica
    const valorBase = tarifaBase * periodoDias;
    const valorConsumo = tarifaConsumo * consumo;
    const valorIluminacao = taxaIluminacao * (valorBase + valorConsumo);
    const valorTotal = valorBase + valorConsumo + valorIluminacao;

    // Salva o resultado no local storage
    const simulacao = {
      periodo: `${dataInicialDate.toLocaleDateString()} a ${dataFinalDate.toLocaleDateString()}`,
      consumo: `${consumo} kWh`,
      valorTotal: `R$ ${valorTotal.toFixed(2)}`
    };
    localStorage.setItem('simulacao', JSON.stringify(simulacao));
    
    // Exibe o resultado para o usuário
    setResult(`Período: ${simulacao.periodo}\nConsumo: ${simulacao.consumo}\nValor Total: ${simulacao.valorTotal}`);
  }

  const [result, setResult] = useState('');

  return (
    <div>
      <h2>Simulador de Conta de Energia Elétrica</h2>
      <form>
        <label htmlFor="leituraInicial">Leitura Inicial:</label>
        <input type="number" id="leituraInicial" value={leituraInicial} onChange={(event) => setLeituraInicial(event.target.value)} />

        <label htmlFor="dataInicial">Data Inicial:</label>
        <input type="date" id="dataInicial" value={dataInicial} onChange={(event) => setDataInicial(event.target.value)} />

        <label htmlFor="leituraFinal">Leitura Final:</label>
        <input type="number" id="leituraFinal" value={leituraFinal} onChange={(event) => setLeituraFinal(event.target.value)} />

        <label htmlFor="dataFinal">Data Final:</label>
        <input type="date" id="dataFinal" value={dataFinal} onChange={(event) => setDataFinal(event.target.value)} />
      </form>

      <button onClick={handleClick}>Calcular</button>

      <pre>{result}</pre>
    </div>
  );
}

export default ContaDeEnergia;