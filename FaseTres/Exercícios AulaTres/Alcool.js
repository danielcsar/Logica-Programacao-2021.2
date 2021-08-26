/* O laboratório fabricante de álcool em gel precisa saber se o produto está
atingindo a concentração ideal para desinfecção, que é de 70%. Para a
ajudar o laboratório, crie um programa onde será preenchida a capacidade
da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel
que precisam ser misturados para preenchimento do vasilhame.
*/

var capacidade = 500; // Garrafa de meio litro ou 500ml.
var alcool = 0.7;
var gel = 0.3;
var volAlcool = capacidade * alcool;
var volGel = capacidade * gel;

console.log('Capacidade da garrafa: ' + capacidade + ' ml.');
console.log('Volume de alcool necessário: ' + volAlcool + ' ml.');
console.log('Volume de gel necessário: ' + volGel + ' ml.');