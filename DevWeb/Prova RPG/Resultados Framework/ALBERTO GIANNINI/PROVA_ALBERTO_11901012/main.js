/*
    AUTOR DO PROJETO
    MATRICULA: 11901012	
    NUMERO DE CHAMADA: 1
    ALBERTO GIANNINI	
*/

var pontos = 10
var forca = 0
var destrteza = 0


// funcao para adicionar pontos no campo de forca

function addButtonForca() {
    if (pontos > 0) {
        document.getElementById('forca').value = forca + 1
        document.getElementById('points').value = pontos - 1
        forca += 1
        pontos -= 1
    }
    else {
        alert("Pontos esgotados!")
    }
}
// funcao para adicionar pontos no campo de destreza
function addButtonDestreza() {
    if (pontos > 0) {
        document.getElementById('destreza').value = destrteza + 1
        document.getElementById('points').value = pontos - 1
        destrteza += 1
        pontos -= 1
    }
    else {
        alert("Pontos esgotados!")
    }

}
// funcao para remover pontos no campo de forca

function removeButtonForca() {
    if (pontos < 10 && forca != 0) {
        document.getElementById('forca').value = forca - 1
        document.getElementById('points').value = pontos + 1
        forca -= 1
        pontos += 1
    }
    else {
        alert("Você não pode ter pontos negativos!")
    }

}

// funcao para remover pontos no campo de destreza

function removeButtonDestreza() {
    if (pontos < 10 && destrteza != 0) {
        document.getElementById('destreza').value = destrteza - 1
        document.getElementById('points').value = pontos + 1
        destrteza -= 1
        pontos += 1
    }
    else {
        alert("Você não pode ter pontos negativos!")
    }

}
// funcao para validar qual radiobutton foi selecionado e imprimir nos inputs o resultado.

function enviar() {
    nome = document.getElementById('nome').value
    classe = document.getElementById('classe').value
    if (nome == "") {
        alert("Informe o seu nome!")
    }
    else {
        if (document.getElementById("humano").checked) {
            setDocuments()
            document.getElementById("raca2").value = "Humano"
        }
        else if (document.getElementById("elfo").checked) {
            setDocuments()
            document.getElementById("raca2").value = "Elfo"
        }
        else if (document.getElementById("anao").checked) {
            setDocuments()
            document.getElementById("raca2").value = "Anão"
        }
    }
}
// funcao para setar as variaves do resultado com o valor dos preenchidos
function setDocuments() {
    document.getElementById("nome2").value = nome
    document.getElementById("classe2").value = classe
    document.getElementById("forca2").value = forca
    document.getElementById("destreza2").value = destrteza
}

