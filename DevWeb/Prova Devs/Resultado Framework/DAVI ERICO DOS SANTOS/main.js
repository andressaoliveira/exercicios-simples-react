var pontuacao = 15;
var d1 = 0;
var d2 = 0;
var d3 = 0;
// declaraçao das variaveis

function addDev1 () {
    if (pontuacao > 0) {
        document.getElementById('devi1').value = d1 + 1
        document.getElementById('pt').value = pontuacao - 1
        d1 += 1
        pontuacao -= 1
    }
    else{
        alert("Nao possui mais pontos")
    }
}

function addDev2 () {
    if (pontuacao > 0) {
        document.getElementById('devi2').value = d2 + 1
        document.getElementById('pt').value = pontuacao - 1
        d2 += 1
        pontuacao -= 1
    }
    else{
        alert("Nao possui mais pontos")
    }
}

function addDev3 () {
    if (pontuacao > 0) {
        document.getElementById('devi3').value = d3 + 1
        document.getElementById('pt').value = pontuacao - 1
        d3 += 1
        pontuacao -= 1
    }
    else{
        alert("Nao possui mais pontos")
    }
}
// funçoes para os botoes de acrentar pontos para cada desenvolvedor e diminuir do total com um alerta caso a pessoa tente colocar mais pontos que os disponiveis 
function removeDev1 () {
    if(pontuacao < 15 && d1 != 0) {
        document.getElementById('devi1').value = d1 - 1
        document.getElementById('pt').value = pontuacao + 1
        d1 -= 1
        pontuacao += 1
    }
  
    
}

function removeDev2 () {
    if(pontuacao < 15 && d2 != 0) {
        document.getElementById('devi2').value = d2 - 1
        document.getElementById('pt').value = pontuacao + 1
        d2 -= 1
        pontuacao += 1
    }
    
}

function removeDev3 () {
    if(pontuacao < 15 && d3 != 0) {
        document.getElementById('devi3').value = d3 - 1
        document.getElementById('pt').value = pontuacao + 1
        d3 -= 1
        pontuacao += 1
    }
   
}
// funçoes para os botoes de diminuir pontos para cada desenvolvedor e aumentar o total
function enviar () {
    document.getElementById('lblDev1').value = d1
    document.getElementById('lblDev2').value = d2
    document.getElementById('lblDev3').value = d3
}
//funçao para imprimir os resultados dos 3 desenvolvedores 