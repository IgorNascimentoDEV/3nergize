const totalContaEnergia = parseFloat(prompt("Digite o valor total da conta de energia:"));

const geracao = (totalContaEnergia * 0.41).toFixed(2);
const transmissao = (totalContaEnergia * 0.03).toFixed(2);
const distribuicao = (totalContaEnergia * 0.16).toFixed(2);
const encargos = (totalContaEnergia * 0.09).toFixed(2);
const tributos = (totalContaEnergia * 0.31).toFixed(2);

const total = (parseFloat(geracao) + parseFloat(transmissao) + parseFloat(distribuicao) + parseFloat(encargos) + parseFloat(tributos)).toFixed(2);

alert(`Análise da conta de energia elétrica:
Geração: R$ ${geracao} (${(geracao / totalContaEnergia * 100).toFixed(2)}%)
Transmissão: R$ ${transmissao} (${(transmissao / totalContaEnergia * 100).toFixed(2)}%)
Distribuição: R$ ${distribuicao} (${(distribuicao / totalContaEnergia * 100).toFixed(2)}%)
Encargos: R$ ${encargos} (${(encargos / totalContaEnergia * 100).toFixed(2)}%)
Tributos: R$ ${tributos} (${(tributos / totalContaEnergia * 100).toFixed(2)}%)

Valor total: R$ ${total}`);
