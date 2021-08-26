/*
Mesmo com aulas online, os alunos do cursinho continuam sendo
avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada.
Pela soma dos pontos, o aluno saberá sua situação na disciplina.
Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10
*/
const prompt = require('prompt-sync')();

let numP1 = Number(prompt('Qual a nota da P1?'));
let numP2 = Number(prompt('Qual a nota da P2?'));
let total = numP1+numP2

if (total <= 4) {
    console.log('Reprovado');
} else if (total <= 6) {
    console.log('Recuperação');
} else if (total <= 8){
    console.log('Aprovado');
} else (total <= 10)
    console.log('Destaque');
