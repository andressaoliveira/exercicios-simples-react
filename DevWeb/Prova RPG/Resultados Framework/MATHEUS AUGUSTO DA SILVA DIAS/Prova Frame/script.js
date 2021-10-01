const form = document.getElementById('form')
/* Adicionando atributos  */ 
function adicionaAtributo(Cid){
    /* obtendo valores dos pontos*/
    const ponto = document.getElementById('pt').value
   
    if(ponto > 0){
        /* lendo valor do atributo e colocando em forma de numero inteiro */
        var atributo = parseInt(document.getElementById(Cid).value, 16)
        /* adicionando valor  */
        atributo += 1;
        /* enviando para tela  */
        document.getElementById(Cid).value = atributo
        
        var restante = ponto
        console.log(restante)
        restante -= 1;
        document.getElementById('pt').value = restante

    }else{
        
        alert("pontos totais já adicionados")
    }
}

/* removendo atributos  */
function removeAtributo(id){
    /* recebendo id do atributo e valor em forma de numero inteiro  */
    var atributo = parseInt(document.getElementById(id).value, 16)
    const ponto = document.getElementById('pt').value
    
    if(atributo > 0){
        
        atributo -= 1;
        document.getElementById(id).value = atributo

        
        var restante = parseInt(ponto, 16)
        console.log(restante)
        restante += 1;
        document.getElementById('pt').value = restante

    }else{
       
        alert("pontos totais já retirados")
    }
}

/* salvando personagem */
function finalizar(){
    
    var nome = document.getElementById("nome").value
    var classe = document.getElementById("classe").value
    var raca = document.querySelector('input[name="raca"]:checked').value
    var atributo1 = document.getElementById("forca").value
    var atributo2 = document.getElementById("destreza").value
    var atributo3 = document.getElementById("inteligencia").value
    var atributo4 = document.getElementById("sabedoria").value


    }