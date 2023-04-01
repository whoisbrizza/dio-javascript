// 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
//     Média = (nota 1 + nota 2 + nota 3) / 3;
//     Classificação:
//     - Média menor que 5, reprovação;
//     - Média entre 5 e 7, recuperação;
//     - Média acima de 7, passou de semestre;

// define as notas
let nota1 = 8;
let nota2 = 6;
let nota3 = 7;

// calcula a média
let media = (nota1 + nota2 + nota3) / 3;

// verifica a classificação
let classificacao;
if (media < 5) {
  classificacao = "reprovação";
} else if (media >= 5 && media < 7) {
  classificacao = "recuperação";
} else {
  classificacao = "passou de semestre";
}

// imprime a média e a classificação
console.log("Média: " + media.toFixed(2));
console.log("Classificação: " + classificacao);