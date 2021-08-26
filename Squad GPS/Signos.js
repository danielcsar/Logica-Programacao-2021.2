/*# Serratec
 *  Lógica de programação - Prof. Zepa
 * Atividade: Elicitação de Requisitos
 * Squad: GPS - Group of Programming Students
 * Autor (Descrição): Daniel Cesar
* Arquivo: signos.js
 * Data: 20/08/2021

### Descrição:

Solicite o nome e a  data de nascimento do usuário. Com essas informações, será gerado o signo e uma descrição genérica e aleatória de sua personalidade.*/

/* Signos
  Jan 1   Capricórnio: de 22 de dezembro a 20 de janeiro;
  Fev 2   Aquário: de 21 de janeiro a 18 de fevereiro;
  Mar 3   Peixes: de 19 de fevereiro a 20 de março;
  Abr 4   Áries: de 21 de março a 20 de abril;
  May 5   Touro: de 21 de abril a 20 de maio;
  Jun 6   Gêmeos: de 21 de maio a 20 de junho;
  Jlh 7   Câncer: de 21 de junho a 22 de julho;
  Ago 8   Leão: de 23 de julho a 22 de agosto;
  Set 9   Virgem: de 23 de agosto a 22 de setembro;
  Out 10  Libra: de 23 de setembro a 22 de outubro;
  Nov 11  Escorpião: de 23 de outubro a 21 de novembro;
  Dez 12  Sagitário: de 22 de novembro a 21 de dezembro;*/

const prompt = require('prompt-sync')();

//Entradas

var nome = prompt('Qual o seu nome?');
var dia = prompt('Qual o dia de seu aniversário? Digite apenas números:');
dia = parseInt(dia);

var mes = prompt('Qual o mês de seu aniversário? Digite apenas números:');
mes = parseInt(mes);

var signo = '';

//Processamento dos signos
    if((mes == 12 && dia <= 21) || (mes == 11 && dia >= 22)){
        signo = 'Sargitário';

    } else if (mes == 11 && dia <= 21 || (mes == 10 && dia >= 23)){
        signo = 'Escorpião';

    } else if(mes == 10 && dia <= 22 || (mes == 9 && dia >= 23)){
        signo = 'Libra';
        
    } else if(mes == 9 && dia <= 22 || (mes == 8 && dia >= 23)){
        signo = 'Virgem';

    } else if(mes == 8 && dia <= 22 || (mes == 7 && dia >= 23)){
        signo = 'Leão';

    } else if(mes == 7 && dia <= 22 || (mes == 6 && dia >= 21)){
        signo = 'Câncer';

    } else if(mes == 6 && dia <= 20 || (mes == 5 && dia >= 20)){
        signo = 'Gêmeos';

    } else if(mes == 5 && dia <= 20 || (mes == 4 && dia >= 21)){
        signo = 'Touro';

    } else if(mes == 4 && dia <= 20 || (mes == 3 && dia >= 22)){
        signo = 'Áries';

    } else if(mes == 3 && dia <= 18 || (mes == 2 && dia >= 19)){
        signo = 'Peixes';

    } else if(mes == 2 && dia <= 20 || (mes == 1 && dia >= 21)){ 
        signo = 'Aquário';

    } else{
        signo = 'Capricórnio';
    }


//Processamento das Frases

var mensagem = "";
var frase = [
    'Você tem uma grande necessidade de que outras pessoas gostem e admiram você.',
    'Você tem tendência a ser crítico consigo mesmo.',
    'Você tem uma grande quantidade de capacidade não utilizada, que não utilizou em seu proveito.',
    'Embora você tenha algumas fraquezas de personalidade, geralmente é capaz de compensá-las.',
    'Seu ajuste sexual apresentou problemas para você.',
    'Disciplinado e autocontrolado por fora, você tende a ser preocupante e inseguro por dentro.',
    'Às vezes, você tem sérias dúvidas se tomou a decisão certa ou fez a coisa certa.',
    'Você prefere uma certa mudança e variedade e fica insatisfeito quando é cercado por restrições e limitações.',
    'Você se orgulha de ser um pensador independente e não aceita as declarações dos outros sem provas satisfatórias.',
    'Você achou imprudente ser muito franco ao se revelar aos outros.',
    'Às vezes você é extrovertido, afável, sociável; outras vezes, é introvertido, cauteloso, reservado.',
    'Algumas de suas aspirações tendem a ser bastante irrealistas.',
    'A segurança é um dos seus principais objetivos na vida.'
];

//O Random precisa ser 2 a mais do que o total de frases, para que a ultima frase seja acessada.

mensagem = frase[Math.floor(Math.random() * (frase.length+2))];

console.log(nome+', seu signo é: '+ signo);
console.log(mensagem);

/* 
Esse algoritmo foi pensado como um teste psicológico, uma maneira do programador testar o Efeito Forer ou Barnum Effect sem nem ele mesmo perceber que está testando.
O efeito Forer é a observação de que as pessoas julgam exageradamente corretas as avaliações de suas personalidades que, supostamente, são feitas exclusivamente para elas, mas que na verdade são vagas e genéricas o bastante para se aplicarem a uma grande quantidade de pessoas.
E segundo o estudo, as pessoas darão notas maiores se qualquer das seguintes for verdadeira:

> a pessoa acredita que a análise é individual e personalizada.
(Por isso foi utilizado os signos.)

> a pessoa acredita na autoridade de quem a está avaliando.
(Por ser um algoritmo, pode-se acreditar que foi feito para cada pessoa individualmente.)

> o avaliador dá ênfase aos traços positivos da personalidade.
(Representado pelas escolhas das frases.)

*/