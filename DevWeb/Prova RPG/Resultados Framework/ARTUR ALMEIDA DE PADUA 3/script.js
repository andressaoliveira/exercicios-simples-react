var pontos = 10
var forca = 0
var destreza = 0

var pt = 10
var forc = 0
var dest = 0

function adicionarForca () {
    if(forca < 10 && pontos > 0) {
        forc = forca++
        pt = pontos--
        document.getElementById('forca').value = forc
        document.getElementById('pt').value = pt
    }
}
function removerForca () {
    if(pontos < 10 && forca > 0) {
        forc = forca--
        pt = pontos++
        document.getElementById('forca').value = forc
        document.getElementById('pt').value = pt
    }
}

function adicionarDestreza () {
    if(destreza < 10 && pontos > 0) {
        dest = destreza++
        pt = pontos--
        document.getElementById('destreza').value = dest
        document.getElementById('pt').value = pt
    }
}
function removerDestreza () {
    if(pontos < 10 && destreza > 0) {
        dest = destreza--
        pt = pontos++
        document.getElementById('destreza').value = dest
        document.getElementById('pt').value = pt
    }
}

function enviar () {
    var select = document.getElementById('classe')

    document.getElementById('classeResulado').value = select.options[select.selectedIndex].value;

    if(document.getElementById('Humano').checked) {
        document.getElementById('racaResulado').value = "Humano";
    } else if(document.getElementById('Elfo').checked){
        document.getElementById('racaResulado').value = "Elfo";
    } else{
        document.getElementById('racaResulado').value = "Anão";
    }

    document.getElementById('nomeResulado').value = document.getElementById('nome').value;
    document.getElementById('forcaResulado').value = document.getElementById('forca').value;
    document.getElementById('destrezaResulado').value = document.getElementById('destreza').value;
    document.getElementById('resultado').style.display = 'block';
}