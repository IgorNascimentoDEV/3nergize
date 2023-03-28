




function calcularContaEnergia() {
    let kwhConsumido = document.getElementById("inputNumero").value;

   kwhConsumido = kwhConsumido/100;
   valorTotal = kwhConsumido * 6.50;

    document.getElementById("resultado").textContent = valorTotal.toFixed(2);
}