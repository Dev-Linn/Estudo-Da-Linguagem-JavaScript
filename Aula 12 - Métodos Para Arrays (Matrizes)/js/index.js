const lista1 =
    ["Arroz", // 0
        "Feijão", // 1
        "Macarrão", // 2
        "leite" // 3

    ];


    const lista2 =
    ["Arroz2", // 0
        "Feijão2", // 1
        "Macarrão2", // 2
        "leite2" // 3

    ];



    // lista.pop() // Tira o ultimo item da minha lista (Leite)
    // lista.push("Qualquer coisa") // adiciona um item na minha lista
    // lista.shift() // remove o primeiro item da matriz
    // lista.unshift("Cebola") // Adiciona um item na lista, porém em primeiro campo
    // delete lista [0] // Deleta o item 0, e deixa ele undefined
    // lista.splice(1,0,"Item adicionado 1", "Item aidiconado 2")

    const superlist = lista1.concat(lista2)

    //document.getElementById("teste").innerHTML = superlist.join(" - ")


    const jogadores = ["Lincoln" , "Lucas", "Teo", "Gabriel"]
    
    jogadores.sort() // orgem alfabética
    jogadores.reverse() //orgem alfabética, ao contrario 



    document.getElementById("teste").innerHTML = jogadores.join(" - ") // Vai me mostrar Teo, Gabriel


    const numeros = ["1" , "22", "31593", "544894"]


    numeros.sort(function (a, b) {
        return (a- b)

    }) 

    document.getElementById("teste").innerHTML = numeros.join(" - ") // Ordenação de numeros

    



