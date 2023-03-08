/* ARRAYS
Os arrays JavaScript são usados para armazenar vários valores
em uma única variável. Diferente dos objetos, que funcionam com
propriedades ou "nomes" que você dá para os itens dentro dele, os
arrays não possuem propriedades. O item dentro dele é encontrado pela
posição.

Imagine um array como uma lista de itens, com controle, por ordem de
posição dentro dele.

Ex: const lista = ["arroz","feijão", "macarrão","leite"];
A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".
E assim por diante.
*/


        // ou

/*

    lista[0] = "Arroz"; 
    lista[1] = "Feijao";
    lista[2] = "Leite";
    lista[3] = "Macarrão";

    */

const lista =
    ["Arroz", // 0
        "Feijão", // 1
        "Macarrão", // 2
        "leite" // 3

    ];


let x = lista[3]; //x = leite.
lista[0] = "Café";
//alert(lista[0]) // = O Arroz virou café.

console.log(lista) //Vai mostrar todos os itens da lista

const pessoa = ["Lincoln", "Costa", 30] // array
//const pessoaa = {nome:"Lincoln" , sobrenome:"Costa", idade:30} // objeto

//pessoa.nome; //objeto
//pessoa[0]; Primeiro. (do array)

//alert(pessoa[pessoa.length -1] ) // vai mostrar o ultimo do array

pessoa.push("Brasileiro")
pessoa[pessoa.length] = "casado" 
//Adiciona itens no array

//alert(pessoa)

let xx = "Lincoln"

alert(Array.isArray(xx)) // Vai retornar true


