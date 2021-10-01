var jogador = {
     nome: '', clase: 'Guerreiro',raca: '', forca: 0 , speed: 0 , qi: 0 , fome: 0
};
var pontos = 10

function adicionaAtributo(atributo){
    if(pontos > 0){
        jogador[atributo]++
        
        pontos--
        document.getElementById("pt").value = pontos
        document.getElementById(atributo).value = jogador[atributo]
    }
    
}   
function removeAtributo(atributo) {
    if(pontos < 10){
        jogador[atributo]--
        
        pontos++
        document.getElementById("pt").value = pontos
        document.getElementById(atributo).value = jogador[atributo]
    }
    
}
function mudarNome(nome) {
    jogador['nome'] = nome.value
    
    
}
function mudarClase(clase) {
    jogador['clase'] = clase.value
    
    
}
function mudarRaca(raca) {
    jogador['raca'] = raca.value
    
    
}
function enviar() {
    document.getElementById("resultado").innerHTML = "[Nome:" + jogador["nome"] + "]" + "\n" +"[Clase:" + jogador["clase"] + "]" + "\n" + "[Raca:" + jogador["raça"] + "]" + "\n" + "[Força:" + jogador["forca"] + "]" + "\n" + "[Speed:" + jogador["speed"] + "]" + "\n" + "[QI:" + jogador["qi"] + "]" + "\n" + "[Fome:" + jogador["fome"] + "]"
}
function excluir(value = null) {
    document.getElementById("resultado").innerHTML = null
}


