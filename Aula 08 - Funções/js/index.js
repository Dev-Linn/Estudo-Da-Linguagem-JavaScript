/* FUNÇÕES

Uma função JavaScript é um bloco de código projetado para executar uma
tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma
saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa
que vai contribuir para todo código.

Uma função JavaScript é executada quando "algo" a invoca (chama-a).
*/


//Aqui está falando "Oque vai acontecer dentro dessa função"
function soma (valor1,valor2) { 
    return valor1 + valor2
}

//Nós demos uma entrada no valor1 e no valor2, e nossa função vai fazer a soma desses 2 valores.

document.getElementById(texto).innerHTML = soma(10,10); //Estou pedindo para colocar dentro do elemento texto com  o valor1 = e valor 2= 10, retornando 20 no (texto)

var total = soma(10,20)
//alert (total) //vai retornar 20


function realParaDollar (real, dollar) {
    return real * dollar

}

var real = 10
var dollar = 5.08


var total = realParaDollar (real, dollar) 

alert("O valor em real é R$ " + real + "E em dollar é " + real * dollar) // vai retornar o valor em dollar


function alertahello() {
    alert("Olá pessoal")

}


//alertahello();

/* FUNÇÕES

Uma função JavaScript é um bloco de código projetado para executar uma
tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma
saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa
que vai contribuir para todo código.

Uma função JavaScript é executada quando "algo" a invoca (chama-a).
*/


//Aqui está falando "Oque vai acontecer dentro dessa função"
function soma (valor1,valor2) { 
    return valor1 + valor2
}

//Nós demos uma entrada no valor1 e no valor2, e nossa função vai fazer a soma desses 2 valores.

document.getElementById(texto).innerHTML = soma(10,10); //Estou pedindo para colocar dentro do elemento texto com  o valor1 = e valor 2= 10, retornando 20 no (texto)

var total = soma(10,20)
//alert (total) //vai retornar 20


function realParaDollar (real, dollar) {
    return real * dollar

}

var real = 10
var dollar = 5.08


var total = realParaDollar (real, dollar) 

alert("O valor em real é R$ " + real + "E em dollar é " + real * dollar) // vai retornar o valor em dollar


function alertahello() {
    alert("Olá pessoal")

}


//alertahello();


function minhaFuncao(){
    var x = 2;
}

// Variavel local, funciona apenas dentro da funcao