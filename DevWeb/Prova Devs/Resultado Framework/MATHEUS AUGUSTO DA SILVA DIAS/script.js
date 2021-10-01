
function Adicionar(parametro) 
{
    var PontosTotais = document.querySelector('#Atributos_PontosTotais')
    var Atributo = document.querySelector("#"+parametro)

    if(PontosTotais.value != 0)
    {

        var temporario = parseInt(PontosTotais.value)
        temporario -= 1
        PontosTotais.value = temporario

        Atributo.value = parseInt(Atributo.value) + 1

        
    }else
    {
        alert('Não possui mais pontos')
    }


}

function Subtrair(parametro)
{
    var PontosTotais = document.querySelector('#Atributos_PontosTotais')
    var Atributo = document.querySelector("#"+parametro)

    if(PontosTotais.value <= 14)
    {
        var temporario = parseInt(PontosTotais.value)
        temporario += 1
        PontosTotais.value = temporario

        Atributo.value = parseInt(Atributo.value) - 1

    }else
    {
        alert('Não é possivel diminuir um atributo para um valor negativo')
    }
}


function GerarResultados()
{
    var Dev1 = document.querySelector('#Dev1')
    var Dev2 = document.querySelector('#Dev2')
    var Dev3 = document.querySelector('#Dev3')

    var Resultado_Dev1 = document.querySelector("#ResultadoDev1")
    var Resultado_Dev2 = document.querySelector("#ResultadoDev2")
    var Resultado_Dev3 = document.querySelector("#ResultadoDev3")
    

    Resultado_Dev1.innerHTML = "Dev1: "+Dev1.value
    Resultado_Dev2.innerHTML = "Dev1: "+Dev2.value
    Resultado_Dev3.innerHTML = "Dev1: "+Dev3.value 

    //if(!Dev2.value){ Resultado_Dev2.innerHTML = "Dev: 2"+Dev2.value } else {Resultado_Dev2.innerHTML = "Dev 2: 0"}
    //if(!Dev3.value){ Resultado_Dev3.innerHTML = "Dev: 3"+Dev3.value } else {Resultado_Dev3.innerHTML = "Dev 3: 0"} 
}