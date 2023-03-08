/* EVENTOS

Eventos são ações disparadas pela interação dos usuários na página.

É o correto manejo desses eventos que tornam as páginas interativas e
dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparado quando recebe um click.
ondblclick -> Disparado quando clique duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o clique do botão foi pressionado.
Jonmouseup -> Disparado quando o clique do botão é liberado
onfocus -> Disparado quando o elemento recebe o foco. Válido para input, s
onchange -> Disparado quando existe uma mudança no conteudo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada. Body.
onresize -> Disparado quando há um redimencionamento da janela.

*/

//onclick - apenas 1 click
    function eventoclick() {

        //alert("Lincoln")

        document.body.style.backgroundColor = "yellow" // fazendo isso, nosso fundo fica amarlo
    }

//ondblclick - 2 clickes    
    function eventoclickduplo() {
       // alert("Click duplo")

    }

    //onmouseover
    function viraVermelho() {
        let div = document.getElementById("teste");
        div.style.backgroundColor = "blue"
           

    }       
    //onmouseout
    function viraAzul() {
        let div = document.getElementById("teste");
        div.style.backgroundColor = "red"
           

    }

    //onmousemove
    function adicionaTexto() {
        let p = document.getElementById("texto")
        //p.append('O mouse moveu <br>')

    }

    //onmousedown

    function clicounatela() {
        //alert('Clicou na tela')

    }


    //Jonmouseup

    function clicounatela() {
        //alert('Clicou na tela')

    }

    // quando tiver um evento de foco, ele vai limpar o texto
    function limapTexto() {

        document.getElementById("compoTexto").value = ""

    }

    //onchange
    function mudou() {

        document.getElementById("compoTexto")
        //alert('Mudou')

    }


    function teclapressionada() {

        let input = document.getElementById("compoTexto").value
        //alert(input)

    }


    function onload() {
        alert('A pagina carregou')

    }



















