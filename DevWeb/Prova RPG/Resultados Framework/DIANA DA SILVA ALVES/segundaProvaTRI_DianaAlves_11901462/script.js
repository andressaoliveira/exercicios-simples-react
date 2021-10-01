/*BUSCANDO OS ELEMENTOS PARA TRATAR AQUI*/
const nome = document.getElementsByClassName('inputNome'); //nome do jogador
const txtPontos = document.getElementsByClassName('txtPontos'); //input type text dos pontos
const txtForca = document.getElementsByClassName('txtForca'); //input type number da força
const txtDestreza = document.getElementsByClassName('txtDestreza'); //input type number da força
const iptClasse = document.getElementsByClassName('classe'); //select de classe
const iptRaca = document.getElementsByClassName('raca'); //radio de raça

/* VARIÁVEIS PARA SEMPRE TRATADAS NA DIV DE RESULTADO */
const nomeResultado = document.getElementsByClassName('nomeResultado');
const classeResultado = document.getElementsByClassName('classeResultado');
const racaResultado = document.getElementsByClassName('racaResultado');
const forcaResultado = document.getElementsByClassName('forcaResultado');
const destrezaResultado = document.getElementsByClassName('destrezaResultado');

/*BOTÃO VERDE DE ADICIONAR QUANTIDADE DE ATRIBUTO */
function adicionaAtributo(event) {
    event.preventDefault(); //funfar o forms
    if (txtPontos <= 10){ //valor default de 10, seguindoo protótipo que foi passado
        if (event.value = txtDestreza) { //add a destreza
            txtDestreza += 1
        } else {
            txtForca += 1 //se não, add a força
        }
        txtPontos -- //removendo do total dos 10
    }
}
/*BOTÃO VERMELHO DE REMOVER QUANTIDADE DE ATRIBUTO */
function removeAtributo(event) {
    event.preventDefault(); //funfar o forms
    if (txtPontos >= 0) {
        if (event.value = txtDestreza && txtDestreza > 0) {
            txtDestreza -= 1
            txtPontos ++
        } else if (event.value = txtForca && txtForca > 0){
            txtForca -= 1
            txtPontos++
        }
    }
}
/*PASSAR OS VALORES DA PRIMEIRA DIV PRA SEGUNDA*/
function enviar(event) {
    event.preventDefault(); //funfar a ação
    nomeResultado.value = nome.value
    classeResultado.value = iptClasse.value
    racaResultado.value = iptRaca.value
    forcaResultado.value = txtForca.value
    destrezaResultado.value = txtDestreza.value
}