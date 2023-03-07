/* Vamos entender Operadores:
-> Os operadores JavaScript são usados para atribuir valores, comparar
valores, executar operações aritméticas e muito mais.

São os sinais que usamos: + − * / = ++ -- += etc ...

São separados em 6 "categorias":

1) Operadores Aritméticos (matemáticos)

2) Operadores de Atribuição

3) Operadores de Sequência

4) Operadores de Comparação

5) Operador Condicional (Ternário)

6) Operadores Lógicos
*/

 
//Aritiméticos & Atribuição

var valor1, valor2, total;

valor1 = 5;
valor2 = 2;

total = valor1 + valor2; // Ira retornar (7)
total = valor1 - valor2;  // Ira retornar (3)
total = valor1 / valor2;  //Ira retorar (2,5)
total = ++valor1; //Ira retornar (6) (incrimento de 1)
total = --valor1; //Ira retornar (4) (decremento de 1)
valor1 = valor1+ valor2; //Ira retornar (7)
valor1 =+ valor2; //Ira retornar (7)
valor1 =- valor2; //Ira retornar (3)

alert(total) 
alert(valor1)



//concatenação

valor1 = "Lincoln "; //atenção no espaço 
valor2 = "Costa"

total = valor1 + valor2 //Ira retornar (Lincoln Costa)


//Operadores de Comparação só retornam (true ou false)

valor1 = 8;
valor2 = 10;

total = (valor1 == valor2); //Quando usamos 2 (==) vazemos a pergunta se uma coisa é igual a outra
// No caso está perguntando se o Valor1 é igual ao Valort 2, então vai retornar false
alert(total);

valor1 = 8;
valor2 = 8;

total = (valor1 == valor2); //Quando usamos 2 (==) vazemos a pergunta se uma coisa é igual a outra
// No caso está perguntando se o Valor1 é igual ao Valort 2, então vai retornar true
alert(total);


valor1 = 8;
valor2 = "8";

total = (valor1 == valor2); //Quando usamos 2 (==) vazemos a pergunta se uma coisa é igual a outra
// No caso está perguntando se o Valor1 é igual ao Valort 2, então vai retornar true
// Ele retorna true por No valor1 é 8 e no Valor2 é 8
alert(total);


valor1 = 8;
valor2 = "8";

total = (valor1 === valor2); //Quando usamos 2 (==) vazemos a pergunta se uma coisa é igual a outra
// No caso está perguntando se o Valor1 é igual ao Valort 2, então vai retornar true
// Quando usamos (===) Ele verifica se o tipo também é igual, nessa caso irá retornar false
alert(total);


valor1 = "8";
valor2 = "8";

total = (valor1 === valor2); //Quando usamos 2 (==) vazemos a pergunta se uma coisa é igual a outra
// No caso está perguntando se o Valor1 é igual ao Valort 2, então vai retornar true
// Quando usamos (===) Ele verifica se o tipo também é igual, nessa caso irá retornar true
alert(total);


valor1 = "8";
valor2 = "8";

total = (valor1 != valor2); //Quando usamos isso estamos perguntando se o valor1 é diferente do valor2
//nesse caso irá responder que "false" pois eles são iguais
alert(total)

valor1 = "8";
valor2 = "12";

total = (valor1 != valor2); //Quando usamos isso estamos perguntando se o valor1 é diferente do valor2
//nesse caso irá responder que "true" pois eles são diferentes
alert(total)


valor1 = "8";
valor2 = "8";

total = (valor1 !== valor2); //Quando usamos isso estamos perguntando se o valor1 é diferente do valor2
//nesse caso ele vai verificar o valor e o tipo, então ele retornará "true"
alert(total)


////////////////////////////////////////////


valor1 = "8";
valor2 = "12";

total = (valor1 < valor2); //Quando usamos isso estamos perguntando se o valor1 é diferente do valor2
//nesse caso irá responder que "true" pois ele é menor
alert(total)

valor1 = "8";
valor2 = "12";

total = (valor1 > valor2); //Quando usamos isso estamos perguntando se o valor1 é diferente do valor2
//nesse caso irá responder que "false" pois ele é maior
alert(total)



/////////////////////////////////////////////
//Operador Condicional (Ternário)
/////////////////////////////////////////////



var idade, eleitor

idade=18;
eleitor = (idade<18) ? "Não eleitor":"Sim, eleitor"; //Ele esta falando para variavel eleitor, se idade for menor que 18, vai ser que não é eleitor, senão eleitor

alert('A resposta é: ' + eleitor) // Vai falar, Sim, eleitor

idade=18;
eleitor = (idade<18) ? "Não eleitor":"Sim, eleitor"; //Ele esta falando para variavel eleitor, se idade for menor que 18, vai ser que não é eleitor, senão eleitor

alert('A resposta é: ' + eleitor + 'A idade é:' + idade) //Ele vai retornar Não eleitor, a idade é 17


/////////////////////////////////////////////
//Operador lógico
/////////////////////////////////////////////

var idade, eleitor, resultado

idade=18;
eleitor = (idade<18) ? "Não eleitor":"Sim, eleitor"; //Ele esta falando para variavel eleitor, se idade for menor que 18, vai ser que não é eleitor, senão eleitor

resultado = (idade > 60 && idade < 70); //se idade é maior que 60 e idade menor que 70 vai retornar true
//qualquer idade entre 61 e 69 = true

alert(resiltado) // vai retornar false

idade=63;
eleitor = (idade<18) ? "Não eleitor":"Sim, eleitor"; //Ele esta falando para variavel eleitor, se idade for menor que 18, vai ser que não é eleitor, senão eleitor

resultado = (idade > 60 && idade < 70); //se idade é maior que 60 e idade menor que 70 vai retornar true
//qualquer idade entre 61 e 69 = true

alert(resiltado) // vai retornar true



idade=65;
eleitor = (idade<18) ? "Não eleitor":"Sim, eleitor"; //Ele esta falando para variavel eleitor, se idade for menor que 18, vai ser que não é eleitor, senão eleitor
resultado = (idade === 65 || idade === 70); // Ou uma condição, ou outra ||

alert(resiltado) // vai retornar true

idade=72;
eleitor = (idade<18) ? "Não eleitor":"Sim, eleitor"; //Ele esta falando para variavel eleitor, se idade for menor que 18, vai ser que não é eleitor, senão eleitor
resultado = (idade === 65 || idade === 72); // Ou uma condição, ou outra ||

alert(resiltado) // vai retornar true

idade=18;
eleitor = (idade<18) ? "Não eleitor":"Sim, eleitor"; //Ele esta falando para variavel eleitor, se idade for menor que 18, vai ser que não é eleitor, senão eleitor
resultado = (idade === 65 || idade === 72); // Ou uma condição, ou outra ||

alert(resiltado) // vai retornar false


idade=18;
eleitor = (idade<18) ? "Não eleitor":"Sim, eleitor"; //Ele esta falando para variavel eleitor, se idade for menor que 18, vai ser que não é eleitor, senão eleitor
resultado = !(idade === 65) //Não idade = 65

alert(resultado) // vai retornar false pois a idade não é 65











