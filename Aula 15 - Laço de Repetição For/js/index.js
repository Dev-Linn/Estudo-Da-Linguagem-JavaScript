/* Laço de repetição For
Laçõs oferecem um jeito facil e rapido de executar uma ação
repetidas vezes

*/
// passar 3 parametros, ponto inicial, condição, e oque vai acontecer depoius daquela condiçãp


for (let i = 0; i < 10001; i++) {
    document.getElementById("teste").innerHTML += i + " ,"
    }



var ano = new Date().getFullYear()

for (let i = ano; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value='"+ i +"'>" +i+"</option>" 
}



const carros = ["gol", "fusca", "brasilia", "del rey", "chevette"]

var tamanho = carros.length

for( let i = 0; i < tamanho; i++) {
    document.getElementById("teste").innerHTML +=carros[i] + "-"
}

