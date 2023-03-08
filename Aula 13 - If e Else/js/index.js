/*if e else */

//var interrupitor = "on"

if (interrupitor == "off") {

    alert('A lampada está ligada')

} else{
alert('A lampada está desligada')

}

var hora = new Date().getHours()

if (hora < 12) {

    //alert('Bom dia');
}

else if(hora < 18) {
    //alert('Boa tarde');

} else {
    //alert('Boa noite');

}




function verificar() {
    let nome = document.getElementById("nome").value;

    if (nome == "" || nome == null) {
        
        let p = document.getElementById("teste").innerHTML = "O campo não pode ser vazio"
       
    } else{
        let p = document.getElementById("teste").innerHTML = "Parabéns, tudo certo!"
        p.style.color = "green"
    }

}