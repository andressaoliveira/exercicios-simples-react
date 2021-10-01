
// importando os valores do html usando query selector e getelementbyname
const nome = document.querySelector("#nome")
const raca = document.getElementsByName("raca")
const classe = document.querySelector("#classe")
const forc = document.querySelector("#forca")
const destreza = document.querySelector("#destreza")
const sabedoria = document.querySelector("#sabedoria")
const inteligencia = document.querySelector("#inteligencia")
const atributos = document.querySelector("#atributos")
const pontos = document.querySelector("#pt")
const resultadofinal = document.querySelector("#resultado")

// maximo de pontos que podem ser distribuidos
var pttotal = 10
// funcao para adicionar habilidade 
function adicionaAtributo(forca)
{
    //adicionar habilidade somente se sobrarem pontos para serem distribuidos
    if (forca == "forca")
    { if (pttotal > 0)
    {
     forc.value++
     pttotal--
     pontos.value = pttotal
    }
    }
    if (forca == "destreza")
    {
        if (pttotal > 0)
        {
            destreza.value++
            pttotal--
     pontos.value = pttotal
           }
    }
    if (forca == "sabedoria")
    {
        if (pttotal > 0)
        {
            sabedoria.value++
            pttotal--
            pontos.value = pttotal
           }
    }
    if (forca == "inteligencia")

    {   if (pttotal > 0)
        {
            inteligencia.value++
            pttotal--
     pontos.value = pttotal
           }
    }
    
}
//funcao para remover habilidades
function removeAtributo(forca)
{
     // confere se a habilidade é maior q 0 para poder ser removida
    if (forca == "forca")
    {
        if (forc.value > 0 )
        {
            forc.value--
            pttotal++
            pontos.value = pttotal
        }
        
    }
    if (forca == "destreza")
    {if (destreza.value > 0 )
        {
            destreza.value--
            pttotal++
            pontos.value = pttotal
        }
    }

    if (forca == "sabedoria")
    {
        {if (sabedoria.value > 0 )
            {
                sabedoria.value--
                pttotal++
                pontos.value = pttotal
            }
        }
        
    }
    if (forca == "inteligencia")
    {
        {if (inteligencia.value > 0 )
            {
                inteligencia.value--
                pttotal++
                pontos.value = pttotal
            }
        }
        
    }

}
//funçao para salvar os dados e imprimir na tela
function Salvar()
{
    var racaValor 

    raca.forEach((val) => 
    {
        if ( val.checked)
        {
            racaValor = val.value
        }
    })
    resultadofinal.innerHTML = 
    `
    <div id="resultado">
    <h1> Nome do Personagem :  ${nome.value}</h1>
    <p> Classe do Personagem :  ${classe.value} </p>
    <p> Raça do Personagem :  ${racaValor}</p>
    <p> Força do Personagem :  ${forc.value}  </p>
    <p> Destreza do Personagem :  ${destreza.value} </p>
    <p> Sabedoria do Personagem :  ${sabedoria.value} </p>
    <p> Inteligenciado Personagem :  ${inteligencia.value}  </p>
</div>
    `
}