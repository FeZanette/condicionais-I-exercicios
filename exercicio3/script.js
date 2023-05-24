// # Exercício 3

// Crie uma função que recebe do usuário sua nacionalidade, utilizando um **prompt** com a seguinte mensagem: "Escreva aqui sua nacionalidade." e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhuma das possibilidades acima.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas.

const nacionalidade = prompt("Escreva sua nacionalidade").toLowerCase()

function verificarNacionalidade(){
    if(nacionalidade === 'brasileira' || nacionalidade === 'brasileiro'){
        console.log("Nacionalidade: brasileira")
    }else if(nacionalidade === 'argentina' || nacionalidade === 'argentino'){
        console.log("Nacionalidade: argentina")
    }else if(nacionalidade === 'uruguaia' || nacionalidade === 'uruguaio'){
        console.log("Nacionalidade: uruguaia")
    }else if(nacionalidade === 'chilena' || nacionalidade === 'chileno'){
        console.log("Nacionalidade: chilena")
    }else if(nacionalidade === 'colombiana' || nacionalidade === 'colombiano'){       
        console.log("Nacionalidade: colombiana")
    }else{
        console.log("Nacionalidade: não encontrada")
    }
}

verificarNacionalidade()


// function receberDados (){
//     if(idade >= 18){
//         console.log ("A pessoa é maior de idade")
//     }else{
//         console.log ("A pessoa é menor de idade")
//     }
//     if(ensinoMedio === true){
//         console.log("A pessoa terminou o ensino médio")
//     }else{
//         console.log("A pessoa não terminou o ensino médio")
//     }
//     if(cursaFaculdade === false){
//         console.log("A pessoa não cursa faculdade")
//     }else{
//         console.log("A pessoa cursa faculdade")
//     }
// }