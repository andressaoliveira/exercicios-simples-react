var pontos = 10;

function adicionaAtributo(id) {
  if (pontos > 0) {
    var input = document.getElementById(id);
    input.value = Number(input.value) + 1;
    pontos--;
    atualizarPontos();
  }
}

function removeAtributo(id) {
  if (pontos < 10) {
    var input = document.getElementById(id);
    input.value = Number(input.value) - 1;
    pontos++;
    atualizarPontos();
  }
}

function atualizarPontos() {
  document.getElementById("pt").value = pontos;
}

function enviar() {
  var dados = {
    Dev1: document.getElementById("Dev1").value,
    Dev2: document.getElementById("Dev2").value,
    Dev3: document.getElementById("Dev3").value,
   
  };

  document.getElementById("Dev1").value = dados.Dev1;
  document.getElementById("Dev2").value = dados.Dev2;
  document.getElementById("Dev3").value = dados.Dev3;
 
}

