/* OBJETOS
Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro = {marca:"ford", modelo:"ka", ano: 2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um Método é uma função colocadas dentro
de uma propriedade.*/

const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function(){
        alert('BIIIIIIIIIII') },
    completo: function () {
        return "A marca é " + this.marca + " e o modelo é: " + this.modelo;
    }
};
//objeto literal, já esta definido as propriedades

//console.log(carro.ano) //vai mostrar um valor expecífico dentro de const carro
console.log(carro.completo())

carro.buzina();