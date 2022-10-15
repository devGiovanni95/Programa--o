//Comentario de uma linha
/*Comentario de varias linhas */

/*É recomendado em vez de usar o VAR usar:
    LET -> (pode alterar)
    ou
    CONST -> (valor fixo)
 */

    /*Na variavel let ou var pode inicializar nula sem valor
    Ja na const é necessario inicializar com um valor pre definido */

/*
var a = 10;
var b = 25;
var soma = a + b;

alert(soma);*/

/*
const a = 10;
const b = 25;

let soma = a + b;

soma = soma + 254;
*/

//alert(soma);

/*console.log(soma);


const c = prompt('Digite um valor para A');

const d = prompt('Digite um valor para B');

const resultado = c+d;

alert(resultado)*/

let nome = prompt('Digite seu nome: ');

 //Converter pra maiuscula
nome = nome.toUpperCase();

//Alerta na tela
alert("SEJA BEM VINDO " + nome);
document.write(nome);

//Pede pro usuario digitar
let e = prompt('Digite um numero de 0 a 10');

//converter c para número
e = Number(e);

console.log(e);

alert(e + 2541);

//Escreve na tela
document.write('Teste escrita')