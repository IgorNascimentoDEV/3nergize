
// function fetchApiDataTarifa(){
//     return fetch('https://apise.way2.com.br/v1/tarifas?apikey=2163780d87ee4237884c498ece5ea7cc&agente=CELPE&ano=2022')
//     .then( (response) => response.json())
//     .then((data) => (data[8].tarifaconsumotusd))
// }

// function fetchApiDataBandeira(){
//     fetch('https://apise.way2.com.br/v1/bandeiras?apikey=2163780d87ee4237884c498ece5ea7cc&datainicial=2023-03-01&datafinal=2023-03-31')
//     .then( (response) => response.json())
//     .then((data) => { return(data.items[0].value) })
// }



let bandeira;
let tarifa;

function fetchApiDataTarifa(){
    return fetch('https://apise.way2.com.br/v1/tarifas?apikey=2163780d87ee4237884c498ece5ea7cc&agente=CELPE&ano=2022')
    .then( (response) => response.json())
    .then((data) => (data[8].tarifaconsumotusd))
    .then((tarifaconsumotusd) => {
      tarifa = tarifaconsumotusd;
      return tarifaconsumotusd;
    })
    .catch((error) => console.log(error));
}
function imprimirTaxa(){
    fetchApiDataTarifa().then((result) => {
        console.log(result); // result é igual à variável tarifa
        console.log(tarifa); // tarifa contém o valor retornado pela Promise
      });
      
}

function fetchApiDataBandeira(){
    return fetch('https://apise.way2.com.br/v1/bandeiras?apikey=2163780d87ee4237884c498ece5ea7cc&datainicial=2023-03-01&datafinal=2023-03-31')
    .then( (response) => response.json())
    .then((data) => (data.items[0].value))
    .then((value) => {
        bandeira = value;
        return value;
    })
    .catch((erro) => console.log(erro));
}
function imprimirBandeira(){
    fetchApiDataBandeira().then((result) =>{
        console.log(result);
        console.log(bandeira);
    })
}
