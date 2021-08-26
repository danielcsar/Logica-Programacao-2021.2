/*
4. O posto de Saúde irá vacinar hoje contra a Covid os cidadãos com 67 anos.
Ao entrar, deve ser solicitada a idade, para então exibir as mensagens de
direcionamento:
acima de 67 anos = Por quê não vacinou ainda?
Abaixo de 67 anos = Volte na próxima semana
67 anos completos = Vacinação hoje.
*/
const prompt = require('prompt-sync')();

let idade = prompt('Qual a sua idade?');

if (idade>67){
    console.log('Por quê não vacinou ainda?');
} else if(idade<67){
    console.log('Volte na próxima semana');
}else
    console.log('Vacinação hoje.');
