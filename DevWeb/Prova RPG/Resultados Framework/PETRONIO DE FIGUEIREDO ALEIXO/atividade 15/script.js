const nome = document.getElementById("nome")
const raca = document.getElementsByName("raca")
const classe = document.getElementById("classe")
const forc = document.getElementById("forca")
const destreza = document.getElementById("destreza")
const sabedoria = document.getElementById("sabedoria")
const inteligencia = document.getElementById("inteligencia")
const atributos = document.getElementById("atributos")
const pts = document.getElementById("pt")
const result = document.getElementById("resultado")


var pontostotais = 10

function adicionaAtributo(forca)
{
    if (forca == "forca")
    { if (pontostotais > 0)
    {
     forc.value++
     pontostotais--
     pts.value = pontostotais
    }
    }
    if (forca == "destreza")
    {
        if (pontostotais > 0)
        {
            destreza.value++
            pontostotais--
            pts.value = pontostotais
           }
    }
    if (forca == "sabedoria")
    {
        if (pontostotais > 0)
        {
            sabedoria.value++
            pontostotais--
            pts.value = pontostotais
           }
    }
    if (forca == "inteligencia")

    {   if (pontostotais > 0)
        {
            inteligencia.value++
            pontostotais--
            pts.value = pontostotais
           }
    }
    
}

function removeAtributo(forca)
{
     
    if (forca == "forca")
    {
        if (forc.value > 0 )
        {
            forc.value--
            pontostotais++
            pts.value = pontostotais
        }
        
    }
    if (forca == "destreza")
    {if (destreza.value > 0 )
        {
            destreza.value--
            pontostotais++
            pts.value = pontostotais
        }
    }

    if (forca == "sabedoria")
    {
        {if (sabedoria.value > 0 )
            {
                sabedoria.value--
                pontostotais++
            pts.value = pontostotais
            }
        }
        
    }
    if (forca == "inteligencia")
    {
        {if (inteligencia.value > 0 )
            {
                inteligencia.value--
                pontostotais++
            pts.value = pontostotais
            }
        }
        
    }

}

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
    result.innerHTML = 
    `
    <h1> Nome do Personagem :  ${nome.value}</h1>
    <h1> Classe do Personagem :  ${classe.value} </h1>
    <h1> Raça do Personagem :  ${racaValor}</h1>
    <h1> Força do Personagem :  ${forc.value}  </h1>
    <h1> Destreza do Personagem :  ${destreza.value} </h1>
    <h1> Sabedoria do Personagem :  ${sabedoria.value} </h1>
    <h1> Inteligenciado Personagem :  ${inteligencia.value}  </h1>

    `
}