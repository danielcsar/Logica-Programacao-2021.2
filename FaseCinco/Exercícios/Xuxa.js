/*
“No abecedário da Xuxa, vamos aprender!” Lembra da música? Então, crie
um programa que recebe uma letra maiúscula e canta sua “definição
musical”.
*/
const prompt = require('prompt-sync')();
let letra = prompt('Digite uma letra: ');
letras = letra.toUpperCase();
let resposta = "";

switch (letras) {
    case 'A':
    resposta = 'A de amor';
    break;
    case 'B':
    resposta = 'B de baixinho';
    break;
    case 'C':
    resposta = 'C de coração';
    break;
    case 'D':
    resposta = 'D de docinho';
    break;
    case 'E':
    resposta = 'E de escola';
    break;
    case 'F':
    resposta = 'F de feijão';
    break;
    case 'G':
    resposta = 'G de gente';
    break;
    case 'H':
    resposta = 'H de humano';
    break;
    case 'I':
    resposta = 'I de igualdade';
    break;
    case 'J':
    resposta = 'J, juventude';
    break;
    case 'L':
    resposta = 'L, liberdade';
    break;
    case 'M':
    resposta = 'M, molecagem';
    break;
    case 'N':
    resposta = 'N, natureza';
    break;
    case 'O':
    resposta = 'O, obrigado';
    break;
    case 'P':
    resposta = 'P, proteção';
    break;
    case 'Q':
    resposta = 'Q de quero-quero';
    break;
    case 'R':
    resposta = 'R de riacho';
    break;
    case 'S':
    resposta = 'S de saudade';
    break;
    case 'T':
    resposta = 'T de terra';
    break;
    case 'U':
    resposta = 'U de universo';
    break;
    case 'V':
    resposta = 'V de vitória';
    break;
    case 'X':
    resposta = 'X é Xuxa';
    break;
    case 'Z':
    resposta = 'Z é zum-zum-zum-zum-zum'
    break;
} 
console.log(resposta);