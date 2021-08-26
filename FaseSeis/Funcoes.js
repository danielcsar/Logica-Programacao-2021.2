function eco(repetir,qtde) {
    const prompt = require('prompt-sync')();
    repetir = prompt("O que deseja repetir?");
    qtde = prompt("Quantas vezes deseja repetir?");
    
    for (let i = 0; i < qtde; i++) {
        console.log(repetir + '');
    } return repetir; 
} 
console.log(eco());
