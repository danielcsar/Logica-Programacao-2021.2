/* Em tempos de pandemia, só é permitido entrar em templos religiosos
pessoas de máscara. Na portaria deve ser medida a temperatura à
distância, e o valor não deve ultrapassar 37,5º */

const prompt = require('prompt-sync')();

var temp = prompt("Digite a temperatura:");
temp = parseInt(temp);
var teste = temp <= 37.5;
var mascara = prompt("Usa máscara? (S ou N):");
var entrada = Boolean;

if (teste && mascara == 'S'){
          entrada = true;
} 
else
   entrada = false;
 
console.log('Autorizar a entrada? '+ entrada);