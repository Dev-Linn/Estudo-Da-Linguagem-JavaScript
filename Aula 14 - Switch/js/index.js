 /*Switch

É usado para realizar diferentes ações com base em diferentes condições
no mesmo bloco de verificação. Caso a condição não seja compatível
não será executada e o valor padrão será acionado.


function verificaCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();


    switch (cor) {
        case "azul":
            document.body.style.background = "blue"
            break;
        
            case "vermelho":
            document.body.style.background ="red"                
            break;
        case "amarelo":
            document.body.style.background = "yellow"               
             break;

             default:
            
        document.getElementById("teste").innerHTML = "A cor: " + " ' " +cor + " ' " + " não está disponivel"
        //Definição padrão
    }

}


*/

function diaDaSemana() {
    var dia = new Date().getDay();

    if (dia==1) {
        alert('Hoje é : Segunda')

    }

    if (dia==2) {
        alert('Hoje é :  Terça')

    }
    
    if (dia==3) {
        alert('Hoje é :  Quarta')
        document.getElementById("teste").innerHTML = "Hoje é :  Quarta"
    }

    if (dia==4) {
        alert('Hoje é :  Quinta')

    }

    if (dia==5) {
        alert('Hoje é :  Sexta')

    }

    if (dia==6) {
        alert('Hoje é :  Sábado')

    }

    if (dia==7) {
        alert('Hoje é :  Domingo')

    }
}