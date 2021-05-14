/* Tranformar notas escolares

    Crie um algoritimo que tranforme as notas do ssitema numérico para sistema de notas em catacterese tipo A B C

    * maior que 90  - A
    * entre 80 - 89 - B
    * entre 70 - 79 - C
    * entre 60 - 69 - D
    * menor que 60  - F

*/

function getNota(nota) {
  let notaA = nota >= 90 && nota <= 100;
  let notaB = nota >= 80 && nota <= 89;
  let notaC = nota >= 70 && nota <= 79;
  let notaD = nota >= 60 && nota <= 69;
  let notaF = nota < 60 && nota >= 0;

  let notaFinal;

  if (notaA) {
    notaFinal = "A";
  } else if (notaB) {
    notaFinal = "B";
  } else if (notaC) {
    notaFinal = "C";
  } else if (notaD) {
    notaFinal = "D";
  } else if (notaF) {
    notaFinal = "F";
  } else {
    notaFinal = "Nota inválida";
  }

  return notaFinal;
}

console.log(getNota(101));
console.log(getNota(100));
console.log(getNota(95));
console.log(getNota(90));
console.log(getNota(85));
console.log(getNota(80));
console.log(getNota(75));
console.log(getNota(70));
console.log(getNota(65));
console.log(getNota(60));
console.log(getNota(55));
console.log(getNota(0));
console.log(getNota(-1));
