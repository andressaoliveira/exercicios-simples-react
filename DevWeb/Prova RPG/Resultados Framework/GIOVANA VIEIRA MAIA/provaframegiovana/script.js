const screen = document.getElementById('cadastro');
const nome = document.getElementsByClassName('nome');
const botaoAdd = document.getElementsByClassName('btn-action');
const btnEnviar = document.getElementsByClassName('btnEnviar btn btn-success');
const textPontos = document.getElementsByClassName('textPontos');
const botaoRemove = document.getElementsByClassName('botaoRemove');
const textForca = document.getElementsByClassName('textForca');
const textDestreza = document.getElementsByClassName('textDestreza');
const classe = document.getElementsByClassName('classe');
const raca = document.getElementsByClassName('raca');

const nomeResultado = document.getElementsByClassName('nomeResultado');
const classeResultado = document.getElementsByClassName('classeResultado');
const racaResultado = document.getElementsByClassName('racaResultado');
const forcaResultado = document.getElementsByClassName('forcaResultado');
const destrezaResultado = document.getElementsByClassName('destrezaResultado');


function adicionaAtributo(event) {
    if (textPontos <= 10){
        if (event.value = destreza) {
            textDestreza += 1
        } else {
            textForca += 1
        }
        textPontos --
    }
}


function removeAtributo(event) {
    if (textPontos >= 0) {
        if (event.value === destreza && textDestreza > 0) {
            textDestreza -= 1
            textPontos ++
        } else if (event.value === forca && textForca > 0){
            textForca -= 1
            textPontos++
        }
    }
}


function enviar(event) {
    nomeResultado.value = nome.value
    classeResultado.value = classe.value
    racaResultado.value = raca.value
    forcaResultado.value = textForca.value
    destrezaResultado.value = textDestreza.value
}