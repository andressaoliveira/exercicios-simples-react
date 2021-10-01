
/*
leonardo yukio macedo kamei
turma 3b1
12001317
*/
var pontosrestantes = 10
var pontosforca = 0
var pontosdestreza = 0
var form = document.querySelector('#form')
function adicionaAtributo1() {
    if(pontosrestantes > 0){
        pontosrestantes--
        pontosforca++
        document.getElementById('pt').value = pontosrestantes
        document.getElementById('forca').value = pontosforca

        return 
    }
}
function removeAtributo1() {
    if(pontosforca > 0){
    pontosrestantes++
    pontosforca--
    document.getElementById('pt').value = pontosrestantes
    document.getElementById('forca').value = pontosforca
    return 
    }
}
function removeAtributo2() {
    if(pontosdestreza > 0){
    pontosrestantes++
    pontosdestreza--
    document.getElementById('pt').value = pontosrestantes
    document.getElementById('destreza').value = pontosdestreza
    return 
    }
}
function adicionaAtributo2() {
    if(pontosrestantes > 0){
        pontosrestantes--
        pontosdestreza++
        document.getElementById('pt').value = pontosrestantes
        document.getElementById('destreza').value = pontosdestreza

        return 
    }
}
function salvar(){
    var div = document.getElementById('resultado')
    var nome = document.getElementById('nome').value
    var raca = document.querySelector('input[name="raca"]:checked').value
	var select = document.getElementById('language');
//	var classe = select.options[select.selectedIndex].value;

    document.write(`
    <h3>Nome: ${nome}</h3>
    <p>Raça: ${raca} </p>
    <p>Classe: ${classe} </p>
    <p> Pontos Força: ${pontosforca} </p>
    <p> Pontos Destreza: ${pontosdestreza} </p>
    `)

}