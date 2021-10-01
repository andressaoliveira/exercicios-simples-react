const forc = document.getElementById("forca")
const pts = document.getElementById("pt")
const estilo = document.getElementById("estilo")
function adicionaAtributo(forca)
{
  var pontostotais = 10
    if (forca == "forca")
    { if (pontostotais > 0)
    {
     forc.value++
     pontostotais--
     pts.value = pontostotais
    }
    }
    if (forca == "estilo")
    {
        if (pontostotais > 0)
        {
            estilo.value++
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
    
        if (forca == "estilo")
        {
            {if (inteligencia.value > 0 )
                {
                    estilo.value--
                    pontostotais++
                pts.value = pontostotais
                }
            }
            
        }
    }
}
/*
  // salva no local storage os itens passados no input
  function salvar(){
  
    let conteudo = JSON.parse(localStorage.getItem('valores')) || [ ] 
    conteudo.push({nome:document.getElementById('nome').value, classe:document.getElementById('classe').value, raca:document.getElementById('raca').value})
    localStorage.setItem('valores',JSON.stringify(conteudo))
  }
 
 //altera a dom mostrando a tabela
 function mostrartable(){
    document.getElementsByTagName("table")[0].style.visibility = "visible";
    document.getElementById("montatabela").value = ''
    let conteudo = JSON.parse(localStorage.getItem('valores')) || [ ]
    conteudo.forEach(filtable);
  }*/