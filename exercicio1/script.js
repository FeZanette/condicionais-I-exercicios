// # Exercício 1

// Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Depois disso, imprima o retorno no console.

// COMO RESOLVER - OPÇÃO 1:
// Vai pedir para digitar no navegador um número

// const numero = Number(prompt("Digite um número"))

// function receberNumero(numero){
//     if(numero %2 === 0){
//         return("O número é par")
//     }else{
//         return("O número é ímpar")
//     }
// }

// console.log(receberNumero(numero))


// COMO RESOLVER - OPÇÃO 2:
// Vai digitar o número na chamada da função dentro do VSCode

function receberNumero(numero){
    if(numero %2 === 0){
        return 'O número é par'
    }else{
        return("O número é ímpar")
    }
}

console.log(receberNumero(22))
console.log(receberNumero(23))