 // Captura os elementos HTML dos inputs
 const leituraInicialInput = document.getElementById('leituraInicial');
 const dataInicialInput = document.getElementById('dataInicial');
 const leituraFinalInput = document.getElementById('leituraFinal');
 const dataFinalInput = document.getElementById('dataFinal');

 // Define as tarifas de energia elétrica
 const tarifaBase = 0.9;
 const tarifaConsumo = 0.05;
 const taxaIluminacao = 0.06;

 // Adiciona um evento de mudança para o botão de calcular
 document.getElementById('btnCalcular').addEventListener('click', () => {
   // Converte os valores dos inputs para números
   const leituraInicial = Number(leituraInicialInput.value);
   const leituraFinal = Number(leituraFinalInput.value);
   const dataInicial = new Date(dataInicialInput.value);
   const dataFinal = new Date(dataFinalInput.value);

   // Calcula a quantidade de dias entre as datas de leitura
   const periodoDias = Math.ceil((dataFinal - dataInicial) / (1000 * 60 * 60 * 24));

   // Calcula o consumo de energia em kWh
   const consumo = leituraFinal - leituraInicial;

   // Calcula o valor da conta de energia elétrica
   const valorBase = tarifaBase * periodoDias;
   const valorConsumo = tarifaConsumo * consumo;
   const valorIluminacao = taxaIluminacao * (valorBase + valorConsumo);
   const valorTotal = valorBase + valorConsumo + valorIluminacao;

   // Salva o resultado no local storage
   const simulacao = {
     periodo: `${dataInicial.toLocaleDateString()} a ${dataFinal.toLocaleDateString()}`,
     consumo: `${consumo} kWh`,
     valorTotal: `R$ ${valorTotal.toFixed(2)}`
   };
   localStorage.setItem('simulacao', JSON.stringify(simulacao));

   // Exibe o resultado para o usuário
   document.getElementById('resultado').textContent = `Período: ${simulacao.periodo}\nConsumo: ${simulacao.consumo}\nValor Total: ${simulacao.valorTotal}`;
 });