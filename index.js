//  1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let indice = 13;
let soma = 0;
let k = 0;
while (k < indice) {
  k = k + 1;
  soma = soma + 1;
}
console.log("soma é", soma);
console.log("fim \r\n");
// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa
// na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function qualNumero(numero) {
  let a = 0;
  let b = 1;

  if (numero === 0 || numero === 1) {
    return true;
  }

  while (b < numero) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  return b === numero;
}

const inputNumero = 21;
const inputNumero2 = 20;

if (qualNumero(inputNumero)) {
  console.log(`pertence à sequência.`);
} else {
  console.log(`não pertence à sequência.`);
}

if (qualNumero(inputNumero2)) {
  console.log(`pertence à sequência.`);
} else {
  console.log(`não pertence à sequência.`);
}
console.log("fim \r\n");
// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
const fs = require("fs");

const dados = JSON.parse(fs.readFileSync("entrada.json", "utf-8"));

const entradaDiasUteis = dados.filter((dia) => dia.valor > 0);

const menorEntrada = Math.min(...entradaDiasUteis.map((dia) => dia.valor));
const maiorEntrada = Math.max(...entradaDiasUteis.map((dia) => dia.valor));

const somaEntrada = entradaDiasUteis.reduce(
  (total, dia) => total + dia.valor,
  0
);
const mediaFaturamento = somaEntrada / entradaDiasUteis.length;

const diasAcimaDaMedia = entradaDiasUteis.filter(
  (dia) => dia.valor > mediaFaturamento
).length;

console.log(`Menor entrada: R$ ${menorEntrada.toFixed(2)}`);
console.log(`Maior entrada: R$ ${maiorEntrada.toFixed(2)}`);
console.log(`Dias com entrada maior que média: ${diasAcimaDaMedia}`);
console.log("fim \r\n");

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
// Faturamento por estado
const entradaEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const estadoTotal = Object.values(entradaEstados).reduce(
  (total, valor) => total + valor,
  0
);

console.log("Percentual por estado:");
for (const estado in entradaEstados) {
  const percentual = (entradaEstados[estado] / estadoTotal) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
console.log("fim \r\n");

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function alterarPalavra(texto) {
  let palavra = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    palavra += texto[i];
  }

  return palavra;
}

const palavraOriginal = "testeTecnico";

const palavraAlterada = alterarPalavra(palavraOriginal);
console.log(`Palavra original: ${palavraOriginal}`);
console.log(`Palavra invertido: ${palavraAlterada}`);
