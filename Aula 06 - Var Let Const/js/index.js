/* Vamos entender Variáveis
Variáveis são "recipientes" onde podemos armazenar informações que
podem variar, ou seja, podem ter qualquer tipo de valor.


No Javascript temos 3 palavras-chaves para declarar variáveis:

-> var

-> let

-> const

*/

var pote = "Bombom";
//alert(pote); Vai criar um alerta mostrando bombom

/* var a = 2;
var b = 3;
var c = a+b;
 
alert(c) // Vai responder 5

*/


// MODO MAIS FACIL DE FAZER O EXERCICIO ACIMA:

//DECLARAÇÃO DE VARIAVEL

var a,b,c

//ATRIBUIÇÃO DOS VALORTES

a = 2
b = 3
c = a + b;

alert(c); // vai aparecer 5

var a = 5 // como ela é uma variavel flexivel, eu consigo reatribuir um novo valor.


//DECLARAÇÃO DE VARIAVEL

    var nome, sobrenome, idade;

//ATRIBUIÇÃO DOS VALORTES

nome = "Lincoln"
sobrenome = "Costa"
NomeCompleto = nome + " " + sobrenome
idade = 30;

pessoa= idade + nome;

document.getElementById("texto").innerHTML = pessoa; // vai retornar 30Lincoln



//VARIAVEL UNICA.

let pessoa = "Dimitri";
// let pessoa = "joao" - Vai retornar erro. pois ele ja foi declarado


var x = 10; // aqui é 2
{

    var x =2; // aqui é 2

}

//Aqui continua 2

document.getElementById("texto").innerHTML = x // vai retornar 2


////////////////////////////////////////////////////////

let x = 10 //aqui é 10

{

    let x = 2; // aqui é 2

}

document.getElementById("texto").innerHTML = x // vai retornar 10



////////////////////////////////////////////////////////



const x = 10 // aqui é 10


{

const x = 2 //Aqui vai retornar erro, não importa onde estiver ele não vai receber outro valor.

}

document.getElementById("texto").innerHTML = x // vai retornar 10
