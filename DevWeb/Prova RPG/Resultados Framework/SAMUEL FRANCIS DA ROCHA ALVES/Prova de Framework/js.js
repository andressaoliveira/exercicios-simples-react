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
    <div class="jatodesacocheio">
        <fieldset id="formulario">
            <legend>Seu personagem:</legend>
            <label for="nomejog">Nome:</label>
            <br>
            <input id="nome" value="${nome.value}"  type="text">
            <br>
            <label for="nomejog">Classe:</label>
            <br>
            <input id="nome" value="${classe.value}"  type="text">
            <br>
            <label for="nomejog">Raça:</label>
            <br>
            <input id="nome" value="${racaValor}" type="text">
            <br>
            <label for="nomejog">Força:</label>
            <br>
            <input id="nome" value="${forc.value}"  type="text">
            <br>
            <label for="nomejog">Destreza:</label>
            <br>
            <input id="nome" value="${destreza.value}"  type="text">
            <br>
            <label for="nomejog">Sabedoria:</label>
            <br>
            <input id="nome" value="${sabedoria.value}"  type="text">
            <br>
            <label for="nomejog">Inteligência:</label>
            <br>
            <input id="nome" value="${inteligencia.value}"  type="text">
            <br>
        </fieldset>
    </div>

    <style>
    .jatodesacocheio
    {
        position:relative;
        left:60%;
        width:100px;
        height:10px;
    }
    </style>
    `
}