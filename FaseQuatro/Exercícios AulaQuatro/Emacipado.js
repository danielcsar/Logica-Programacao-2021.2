/* É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a
pessoa do sexo masculino a partir dos 18 anos. Crie um programa para
atestar a emancipação do cidadão com base em sua idade no ano atual. */

const prompt = require('prompt-sync')();

var sexo = prompt("Digite o sexo: (Masculino ou Feminino)");
var idade = prompt("Digite a idade: ");
var ano = prompt("Digite o seu ano de nascimento: ");
idade = parseInt(idade);
emacipado = Boolean;

if (idade >= 21){
    emacipado = true;
} else {
    if (idade >= 18 && sexo == "Masculino") {
            emacipado = true;
    }
    else {
    emacipado = false;
    }
}
 
console.log('Sexo: '+ sexo);
console.log('Ano de Nascimento: '+ ano);
console.log('Cidadão emacipado? '+ emacipado);