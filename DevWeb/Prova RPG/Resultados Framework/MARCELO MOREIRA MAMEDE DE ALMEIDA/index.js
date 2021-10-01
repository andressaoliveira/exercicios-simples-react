var total = 10
var forca = 0
var destrteza = 0
//Marcelo Moreira Mamede de almeida
//34
//3b1
// destreza2 = document.getElementById('destreza').value
// forca2 = document.getElementById('forca').value
// total2 = document.getElementById('points').value

function adicionarF() {
    if (total > 0) {

    //forca2 = forca + 1
    //total2 = total - 1
        document.getElementById('forca').value = forca + 1
    document.getElementById('points').value = total - 1
    console.log(forca, destrteza, total)
    forca += 1
    total -= 1
    }
}
function adicionarD() {
    if (total >= 0) {
    //destreza2 = destreza + 1
    //total2 = total - 1
        document.getElementById('destreza').value = destrteza + 1
    document.getElementById('points').value = total - 1
    destrteza += 1
    total -= 1
    console.log(forca, destrteza, total)
    }

}
function removerF() {
    if (total <= 10) {
    //forca2 = forca - 1
    //total2 = total + 1
        document.getElementById('forca').value = forca - 1
        document.getElementById('points').value = total + 1
        forca -= 1
        total += 1
    }

}
function removerD() {
    if (total <= 10) {
    //destreza2 = destreza + 1
    //total2 = total - 1
        document.getElementById('destreza').value = destrteza - 1
        document.getElementById('points').value = total + 1
        destrteza -= 1
        total += 1
    }

}

function Validar() {
    nome = document.getElementById('nome').value
    classe = document.getElementById('classe').value
    if (document.getElementById("humano").checked) {
        console.log(nome, classe, "humano", forca, destrteza)
    }
    else if(document.getElementById("elfo").checked) {
        console.log(nome, classe, "elfo", forca, destrteza)
    }
    else if (document.getElementById("anao").checked) {
        console.log(nome, classe, "anao", forca, destrteza)
    }
}