/* Vou tomar a tabuada! O aluno de matemática escolhe o número, e o
sistema lhe ensina a contar. */

const prompt = require('prompt-sync')();

var numero = 1

do {
    for (i = 1; i<=10 ; i++) {
        var resposta = numero * i
        console.log(numero+' x '+i+' = '+resposta);
    }
    numero++;
}
while (numero < 11);
