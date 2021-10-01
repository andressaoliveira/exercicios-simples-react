const nome = document.getElementById("nome")
const raca = document.getElementsByName("raca")
const classe = document.getElementById("classe")
const forc = document.getElementById("forca")
const destreza = document.getElementById("destreza")
const sabedoria = document.getElementById("sabedoria")
const inteligencia = document.getElementById("inteligencia")
const atributos = document.getElementById("atributos")
const pontostotal = document.getElementById("pt")
const result = document.getElementById("resultado")
//declarando ass variaveis com os valores pressentes com o get element

var pontostotais = 10

function adicionaAtributo(forca)
{
    if (forca == "forca")
    { if (pontostotais > 0)
    {
     forc.value++
     pontostotais--
     pontostotal.value = pontostotais
    }
    }
    if (forca == "destreza")
    {
        if (pontostotais > 0)
        {
            destreza.value++
            pontostotais--
            pontostotal.value = pontostotais
           }
    }
    if (forca == "sabedoria")
    {
        if (pontostotais > 0)
        {
            sabedoria.value++
            pontostotais--
            pontostotal.value = pontostotais
           }
    }
    if (forca == "inteligencia")

    {   if (pontostotais > 0)
        {
            inteligencia.value++
            pontostotais--
            pontostotal.value = pontostotais
           }
    }
    
}
//função para adicionar atributos
function removeAtributo(forca)
{
     
    if (forca == "forca")
    {
        if (forc.value > 0 )
        {
            forc.value--
            pontostotais++
            pontostotal.value = pontostotais
        }
        
    }
    if (forca == "destreza")
    {if (destreza.value > 0 )
        {
            destreza.value--
            pontostotais++
            pontostotal.value = pontostotais
        }
    }

    if (forca == "sabedoria")
    {
        {if (sabedoria.value > 0 )
            {
                sabedoria.value--
                pontostotais++
                pontostotal.value = pontostotais
            }
        }
        
    }
    if (forca == "inteligencia")
    {
        {if (inteligencia.value > 0 )
            {
                inteligencia.value--
                pontostotais++
                pontostotal.value = pontostotais
            }
        }
        
    }

}
//função para remover atributos
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
    <p> Nome do Personagem :  ${nome.value}</p>
    <p> Classe do Personagem :  ${classe.value} </p>
    <p> Raça do Personagem :  ${raca.value}</p>
    <p> Força do Personagem :  ${forc.value}  </p>
    <p> Destreza do Personagem :  ${destreza.value} </p>
    <p> Sabedoria do Personagem :  ${sabedoria.value} </p>
    <p> Inteligenciado Personagem :  ${inteligencia.value}  </p>
    `
}
// função para salvar e printar na tela
