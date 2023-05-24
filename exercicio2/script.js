// # Exercício 2

// Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

const idade = Number(prompt("Qual a sua idade?"))
const ensinoMedio = confirm("Você terminou o ensino médio?")
const cursaFaculdade = confirm("Você está cursando faculdade?")

function receberDados (){
    if(idade >= 18){
        console.log ("A pessoa é maior de idade")
    }else{
        console.log ("A pessoa é menor de idade")
    }
    if(ensinoMedio === true){
        console.log("A pessoa terminou o ensino médio")
    }else{
        console.log("A pessoa não terminou o ensino médio")
    }
    if(cursaFaculdade === false){
        console.log("A pessoa não cursa faculdade")
    }else{
        console.log("A pessoa cursa faculdade")
    }
}

receberDados(idade, ensinoMedio, cursaFaculdade)
// console.log(receberDados(idade, ensinoMedio, cursaFaculdade))


// Exemplo

// Caso a primeira pessoa tenha idade >= 18:

// "A pessoa é maior de idade"

// e caso não seja:

// "A pessoa é menor de idade"


