/* O setor de RH quer fazer uma separação dos candidatos à vaga de programador usando um critério diferente: As pessoas com nome iniciado em vogal serão entrevistadas na segunda-feira, e as pessoas com nome iniciado em consoante, na terça-feira.*/

const prompt = require('prompt-sync')();

do {
    var nome = prompt('Qual a primeira letra do seu nome?');
    nome = nome.toUpperCase(nome);

    if (nome == 'A'||nome == 'E'||nome == 'I'||nome == 'O'||nome == 'U'){
        console.log(nome+", sua entrevista é segunda-feira");
    } else 
        console.log(nome+", sua entrevista é terça-feira");
} while (nome != "")
