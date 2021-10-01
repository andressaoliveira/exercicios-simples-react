/*  
    AUTOR DO PROJETO
    MATRICULA: 11901365
    NUMERO DE CHAMADA: 50
    VITORIA DE LOURDES CARVALHO SANTOS
*/


var points = 10
var forca = 0
var destrteza = 0
function adicionarForca() {
    if (points > 0) {
        document.getElementById('forca').value = forca + 1
    document.getElementById('pontos').value = points - 1
    console.log(forca, destrteza, points)  
    forca = forca + 1
    points = points - 1
    }
}

function adicionarDestreza() {
    if (points > 0) {
        document.getElementById('destreza').value = destrteza + 1
    document.getElementById('pontos').value = points - 1
    destrteza = destrteza + 1
    points = points - 1
    console.log(forca, destrteza, points)  
    }

}

function removerPontos() {
    if (points < 10) {
        document.getElementById('forca').value = forca - 1
        document.getElementById('destreza').value = destrteza - 1
        document.getElementById('pontos').value = points + 1  
        forca = forca - 1
        points = points- 1
        console.log(forca, destrteza, points)  
    }
    
}

function clicar() {
    nomePersonagem = document.getElementById('nome').value
    classePersonagem = document.getElementById('classe').value
    if (document.getElementById("humano").checked) {
        console.log(nomePersonagem, classePersonagem, "Humano", forca, destrteza)
    }
    if(document.getElementById("elfo").checked) {
        console.log(nomePersonagem, classePersonagem, "Elfo", forca, destrteza)
    }
    if (document.getElementById("anao").checked) {
        console.log(nomePersonagem, classePersonagem, "Anao", forca, destrteza)
    }
}

