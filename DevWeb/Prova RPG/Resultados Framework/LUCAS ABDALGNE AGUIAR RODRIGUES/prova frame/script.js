// adicionar
function adicionaAtributo(id){
    // buscar pontos
    const pt = document.getElementById('pt').value
    
    //verificar se ha pontos a serem gastos
    if(pt > 0){

        var ponto = parseInt(document.getElementById(id).value)
        ponto += 1
        document.getElementById(id).value = ponto
        
        //remover o ponto adicionado dos pontos
        var resto = pt
        resto -= 1
        document.getElementById('pt').value = resto

    }else{

        //alerta ao atingir 0 pontos
        alert("Todos pontos ja foram adicionados")

    }
}

//remover
function removeAtributo(id){
    //buscar os pontos atribuidos ao atributo
    var ponto = parseInt(document.getElementById(id).value)

    //buscar pontos
    const pt = document.getElementById('pt').value

    //verificar e ha pontos a serem retirados
    if(ponto > 0){
        ponto -= 1;
        document.getElementById(id).value = ponto

        //add o ponto retirado aos pontos
        var restante = parseInt(pt)
        restante += 1;
        document.getElementById('pt').value = restante

    }else{

        //alerta se não houver pontos a serem retirados
        alert("Todos pontos ja foram retirados")
    }
}

//resultado
function enviar(){
    
    //Pegar todos os valores
    var nome = document.getElementById("nome").value
    var classe = document.getElementById("classe").value
    var raca = document.querySelector('input[name="raca"]:checked').value
    var forca = document.getElementById("forca").value
    var vigor = document.getElementById("vigor").value
    var agilidade = document.getElementById("agilidade").value
    var resistencia = document.getElementById("resistencia").value

    //Verificar se ha algum campo vazio
    if(nome != "" && forca != "" && vigor != "" && agilidade != "" && resistencia != ""){ 
        
        //add elementos ao forms escondido
        document.getElementById("resNome").value = nome
        document.getElementById("resClasse").value = classe
        document.getElementById("resRaca").value = raca
        document.getElementById("resForca").value = forca
        document.getElementById("resVigor").value = vigor
        document.getElementById("resAgilidade").value = agilidade
        document.getElementById("resResistencia").value = resistencia

        //mostrar forms escondido
        var resultado = document.getElementById("resultado")
        resultado.style.display = "block"

        }else{

            //alerta se houver algum campo em branco
            alert("Preencha todos os campos")
    }
}

