alert("Ainda contem valores em branco")
const form = document.getElementById('form')
/* Adicionando atributos  */ 
function adicionaAtributo(Cid){
    
    const ponto = document.getElementById('pt').value
    
    if(ponto > 0){
        
        var atributo = parseInt(document.getElementById(Cid).value, 16)
        
        atributo += 1;
       
        document.getElementById(Cid).value = atributo
        
        var restante = ponto
        console.log(restante)
        restante -= 1;
        document.getElementById('pt').value = restante

    }
}




/* Remover atributos  */ 
function removeAtributo(Cid){

    var atributo = parseInt(document.getElementById(Cid).value, 16)

    const ponto = document.getElementById('pt').value

    if(atributo > 0){
        atributo -= 1;
        document.getElementById(Cid).value = atributo

        var restante = parseInt(ponto, 16)

        console.log(restante)
        restante += 1;
        document.getElementById('pt').value = restante

    }
}   
