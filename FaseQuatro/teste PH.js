/*
var idade = prompt('Qual a sua idade?')

var boolean = !isNaN(idade) ? true : false
var number = !isNaN(idade) ? 0 : 1
var string = !isNaN(idade) ? 'é numero' : 'não é numero'

console.log(boolean)
console.log(number)
console.log(string)

se (condição) {
  
} caso contrario {

}

condição ? é verdade : não é verdade
*/

console.log('OBS: Informe apenas número')
const idade = "25"//prompt('Qual a sua idade?')

let resposta = !isNaN(idade)
  ? 'Você tem ' + idade + ' anos'
  : 'Pf! Informe um número, vacilão!'

console.log(resposta)