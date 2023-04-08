 // Captura os elementos HTML dos inputs
 const leituraInicialInput = document.getElementById('leituraInicial');
 const dataInicialInput = document.getElementById('dataInicial');
 const leituraFinalInput = document.getElementById('leituraFinal');
 const dataFinalInput = document.getElementById('dataFinal');

// Consumindo api do cetor eletrico
 //tarifaConsumo
 function fetchApiDataTarifa(){
  return fetch('https://apise.way2.com.br/v1/tarifas?apikey=2163780d87ee4237884c498ece5ea7cc&agente=CELPE&ano=2022')
  .then( (response) => response.json())
  .then((data) => (data[0].tarifademandatusd))
  .then((tarifademandatusd) => {
    tarifaConsumo = tarifademandatusd;
    return tarifademandatusd;
  })
  .catch((error) => console.log(error));
}

//taxaIluminacao
function fetchApiDataTarifaBase(){
  return fetch('https://apise.way2.com.br/v1/tarifas?apikey=2163780d87ee4237884c498ece5ea7cc&agente=CELPE&ano=2022')
  .then( (response) => response.json())
  .then((data) => (data[0].tarifademandatusd))
  .then((tarifademandatusd) => {
    taxaIluminacao = tarifademandatusd;
    return tarifademandatusd;
  })
  .catch((error) => console.log(error));
}

//tarifaBandeira
function fetchApiDataTarifaBandeira(){
  return fetch('https://apise.way2.com.br/v1/bandeiras?apikey=2163780d87ee4237884c498ece5ea7cc&datainicial=2023-03-01&datafinal=2023-03-31')
  .then( (response) => response.json())
  .then((data) => (data.items[0].value))
  .then((value) => {
    tarifaBandeira = value;
    return value;
  })
  .catch((erro) => console.log(erro));
}

 // Define as tarifas de energia elétrica
 let taxaIluminacao = fetchApiDataTarifaBase();//6.28 valor da tarifa de iluminação publica
 let tarifaConsumo = fetchApiDataTarifa();//5.03 pra cada 100khw consumido
 let tarifaBandeira = fetchApiDataTarifaBandeira();//codigo da bandeira
 
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
   let taxaConsumoNumber = Number(tarifaConsumo);
   let taxaIluminacaoNumber = Number(taxaIluminacao); 
   
   
   const valorConsumo = (taxaConsumoNumber / 10) * consumo;
   const valorTotal = valorConsumo + taxaIluminacaoNumber;


   // Salva o resultado no local storage
   const simulacao = {
     periodo: `${dataInicial.toLocaleDateString()} a ${dataFinal.toLocaleDateString()}`,
     consumo: `${consumo} kWh`,
     valorTotal: `R$ ${valorTotal.toFixed(2)}`,
     tarifa:`${tarifaConsumo}`,
     taxaIluminacao:`${taxaIluminacao}`,
     dias:`${periodoDias} Dias`

   };
   localStorage.setItem('simulacao', JSON.stringify(simulacao));

   // Exibe o resultado para o usuário
   document.getElementById('resultado').textContent = `Período: ${simulacao.dias}\nConsumo: ${simulacao.consumo}\nValor Total: ${simulacao.valorTotal}`;
 });