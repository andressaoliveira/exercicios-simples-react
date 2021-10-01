var pontos = 10
var forca = 0
var destreza = 0
var sabedoria = 0
var inteligencia = 0

var pontos1 = 10
var forca1 = 0
var destreza1 = 0
var sabedoria1 = 0
var inteligencia1 = 0

function adicionarForca () {
    if(forca < 10 && pontos > 0) {
        forca1 = forca++
        pontos1 = pontos--
        document.getElementById('forca').value = forca1
        document.getElementById('pt').value = pontos1
    }
}
function removerForca () {
    if(pontos < 10 && forca > 0) {
        forca1 = forca--
        pontos1 = pontos++
        document.getElementById('forca').value = forca1
        document.getElementById('pt').value = pontos1
    }
}

function adicionarDestreza () {
    if(destreza < 10 && pontos > 0) {
        destreza1 = destreza++
        pontos1 = pontos--
        document.getElementById('destreza').value = destreza1
        document.getElementById('pt').value = pontos1
    }
}
function removerDestreza () {
    if(pontos < 10 && destreza > 0) {
        destreza1 = destreza--
        pontos1 = pontos++
        document.getElementById('destreza').value = destreza1
        document.getElementById('pt').value = pontos1
    }
}

function adicionarSabedoria () {
    if(sabedoria < 10 && pontos > 0) {
        sabedoria1 = sabedoria++
        pontos1 = pontos--
        document.getElementById('sabedoria').value = sabedoria1
        document.getElementById('pt').value = pontos1
    }
}
function removerSabedoria () {
    if(pontos < 10 && sabedoria > 0) {
        sabedoria1 = sabedoria--
        pontos1 = pontos++
        document.getElementById('sabedoria').value = sabedoria1
        document.getElementById('pt').value = pontos1
    }
}

function adicionarInteligencia () {
    if(inteligencia < 10 && pontos > 0) {
        inteligencia1 = inteligencia++
        pontos1 = pontos--
        document.getElementById('inteligencia').value = inteligencia1
        document.getElementById('pt').value = pontos1
    }
}
function removerInteligencia () {
    if(pontos < 10 && inteligencia > 0) {
        inteligencia1 = inteligencia--
        pontos1 = pontos++
        document.getElementById('inteligencia').value = inteligencia1
        document.getElementById('pt').value = pontos1
    }
}


function enviar () {
    var select = document.getElementById('classe')

    document.getElementById('classeResul').value = select.options[select.selectedIndex].value;

    if(document.getElementById('racaH').checked) {
        document.getElementById('racaResul').value = "Humano";
    } else if(document.getElementById('racaE').checked){
        document.getElementById('racaResul').value = "Elfo";
    } else{
        document.getElementById('racaResul').value = "Anão";
    }

    document.getElementById('nomeResul').value = document.getElementById('nome').value;
    document.getElementById('forcaResul').value = document.getElementById('forca').value;
    document.getElementById('destrezaResul').value = document.getElementById('destreza').value;
    document.getElementById('sabedoriaResul').value = document.getElementById('sabedoria').value;
    document.getElementById('inteligenciaResul').value = document.getElementById('inteligencia').value;
    document.getElementById('resultado').style.display = 'block';
}

function limpar() {
    document.getElementById('nome').value = "";
    document.getElementById('classe').value = "Guerreiro";
    document.getElementById("racaH").checked = true;
    document.getElementById('forca').value = 0;
    document.getElementById('destreza').value = 0;
    document.getElementById('sabedoria').value = 0;
    document.getElementById('inteligencia').value = 0;
    document.getElementById('pt').value = 10;

    document.getElementById('nomeResul').value = "";
    document.getElementById('classeResul').value = "";
    document.getElementById("racaResul").value = "";
    document.getElementById('forcaResul').value = "";
    document.getElementById('destrezaResul').value = "";
    document.getElementById('sabedoriaResul').value = "";
    document.getElementById('inteligenciaResul').value = "";

    document.getElementById('resultado').style.display = 'none';
}