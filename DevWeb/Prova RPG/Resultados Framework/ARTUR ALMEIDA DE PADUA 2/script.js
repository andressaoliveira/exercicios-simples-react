const nickname = document.getElementById("nome")
const tribes = document.getElementsByName("raca")
const types = document.getElementById("classe")
const strong = document.getElementById("forca")
const dest = document.getElementById("destreza")
const sab = document.getElementById("sabedoria")
const inte = document.getElementById("inteligencia")
const atrib = document.getElementById("atributos")
const points = document.getElementById("pt")
const resultado = document.getElementById("resultado")

function adicionaAtributo(mais)
{
    switch (mais)
    {
    case "forca":
        if (points.value > 0 )
        {
            strong.value++
            points.value--
        }
        break;
    case 'destreza':
        if (points.value > 0 )
        {
            dest.value++
            points.value--
        }
        break;
    case 'sabedoria':
        if (points.value > 0 )
        {
            sab.value++
            points.value--
        }
        break;
    default:
        if (points.value > 0 )
        {
            inte.value++
            points.value--
        }
        break;
    }

}

function removeAtributo(menos)
{
    switch (menos)
    {
    case 'forca':
        if (points.value < 10 && forc.value > 0)
        {
            forc.value--
            points.value++
        }
        break;
    
    case 'destreza':
        if (points.value < 10 && destreza.value > 0)
        {
            destreza.value--
            points.value++
        }
        break;

    case 'sabedoria':
        if (points.value < 10 && sabedoria.value > 0)
        {
            sabedoria.value--
            points.value++
        }
        break;
    
    default:
        if (points.value < 10 && inteligencia.value > 0)
        {
            inteligencia.value--
            points.value++
        }
        break;
    }

}

function Salvar()
{
    var tribe

    tribes.forEach((valor) => 
    {
        if (valor.checked)
        {
            tribe = valor.value
        }
    })
    resultado.innerHTML = 
    `
    <h1> Nome do Personagem :  ${nickname.value}</h1>
    <h1> Classe do Personagem :  ${types.value} </h1>
    <h1> Raça do Personagem :  ${tribe}</h1>
    <h1> Força do Personagem :  ${strong.value}  </h1>
    <h1> Destreza do Personagem :  ${dest.value} </h1>
    <h1> Sabedoria do Personagem :  ${sab.value} </h1>
    <h1> Inteligência do Personagem :  ${inte.value}  </h1>
    `
    
}