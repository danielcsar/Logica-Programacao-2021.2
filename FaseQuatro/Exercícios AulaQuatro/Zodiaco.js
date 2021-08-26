/* O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob
o signo de Aquário são mais inteligentes que os demais. */

// Aquário: de 21 de janeiro a 18 de fevereiro;

const prompt = require('prompt-sync')();

console.log('Digite apenas números.');
var mes = prompt('Qual o mes do seu aniversário?');
var dia = prompt('Qual o dia do seu aniversário?');
var smart = Boolean;

mes = parseInt(mes);
dia = parseInt(dia);

if (mes > 2) {
    smart = false    
    console.log('Mês do seu nascimento: '+ mes);
    console.log('Dia do aniversário: '+ dia);
    console.log('Você é inteligente? '+ smart);
}
else{
    if ((mes == 1)) {
        if (dia >= 21) {
            smart = true
            console.log('Mês do seu nascimento: '+ mes);
            console.log('Dia do aniversário: '+ dia);
            console.log('Você é inteligente? '+ smart);
        }
    }
    else {
        if (mes == 2) {
            if (dia <= 18) {
                smart = true
                console.log('Mês do seu nascimento: '+ mes);
                console.log('Dia do aniversário: '+ dia);
                console.log('Você é inteligente? '+ smart);
            }
        }
    }
}
