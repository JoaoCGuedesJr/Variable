/*
    Celsius em fahrenheit 

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra 

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

function conversorDeValores(temperatura) {
  const celsius = temperatura.toUpperCase().includes("C");
  const fehrenheit = temperatura.toUpperCase().includes("F");

  if (celsius && fehrenheit) {
    throw new Error("temperatura não identificada");
  }

  let novaTemperatura = Number(temperatura.toUpperCase().replace("F", ""));
  let conversor = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let sinalTemperatura = " C";

  if (celsius) {
    novaTemperatura = Number(temperatura.toUpperCase().replace("C", ""));
    conversor = (celsius) => (celsius * 9) / 5 + 32;
    sinalTemperatura = " F";
  }

  return conversor(novaTemperatura) + sinalTemperatura;
}

try {
  console.log(conversorDeValores("32F"));
  console.log(conversorDeValores("10F"));
  console.log(conversorDeValores("50C"));
} catch (error) {
  console.log(error.message);
}
