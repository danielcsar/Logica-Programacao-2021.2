/* O menino, os tênis e os apitos
Observe as quatro equações abaixo, a partir das quais você pode identificar que
cada figura (menino, tênis e apitos) possui um valor diferente. Seu desafio é
descobrir qual é o resultado da última equação. Preste muita atenção, pois os
detalhes fazem a diferença!*/

var tenis = 30 / 3
var menino = (20 - tenis) / 2 
var apito = (13 - menino) / 2 

var resultado = tenis + menino * apito

console.log('Tênis = '+tenis);
console.log('Apito = '+apito);
console.log('Menino = '+menino);
console.log('Resultado = '+resultado);