/*
    Sistema de gastos familiar

    Crei um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas:[]
        * despesas: []
    
    Agora crie uma função que irá calcular o tottatl de receitas e despesas e irá mostrar uma mensagem se a família esta com saldo positivo ou negativo, seguindo o valor do saldo

*/

let familia = {
  receitas: [999, 888, 777],
  despesas: [750, 890, 963.15, 99.89],
};

function calculardoraSoma(array) {
  let total = 0;

  for (let valor of array) {
    total += valor;
  }

  return total;
}

function balanco() {
  const somaReceitas = calculardoraSoma(familia.receitas);
  const somaDespesas = calculardoraSoma(familia.despesas);

  const saldo = somaReceitas - somaDespesas;

  let estadoDoSaldo = "negativo";

  if (saldo >= 0) {
    estadoDoSaldo = "positivo";
  }

  console.log(`seu saldo é ${estadoDoSaldo} em ${saldo.toFixed(2)} reais`);
}

balanco();
