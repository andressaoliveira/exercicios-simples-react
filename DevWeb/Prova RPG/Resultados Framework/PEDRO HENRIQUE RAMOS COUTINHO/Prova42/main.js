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
    nome: document.getElementById("nome").value,
    classe: document.getElementById("classe").value,
    raca: document.querySelector('input[name="raca"]:checked').value,
    vigor: document.getElementById("vigor").value,
    percepcao: document.getElementById("percepcao").value,
    concentracao: document.getElementById("concentracao").value,
    agilidade: document.getElementById("agilidade").value,
  };

  document.getElementById("resultadoNome").value = dados.nome;
  document.getElementById("resultadoClasse").value = dados.classe;
  document.getElementById("resultadoRaca").value = dados.raca;
  document.getElementById("resultadoVigor").value = dados.vigor;
  document.getElementById("resultadoPercepcao").value = dados.percepcao;
  document.getElementById("resultadoConcentracao").value = dados.concentracao;
  document.getElementById("resultadoAgilidade").value = dados.agilidade;
}

function limpar() {
  document.getElementById("nome").value = "";
  document.getElementById("vigor").value = 0;
  document.getElementById("percepcao").value = 0;
  document.getElementById("concentracao").value = 0;
  document.getElementById("agilidade").value = 0;
  document.getElementById("resultadoNome").value = "";
  document.getElementById("resultadoClasse").value = "";
  document.getElementById("resultadoRaca").value = "";
  document.getElementById("resultadoVigor").value = "";
  document.getElementById("resultadoPercepcao").value = "";
  document.getElementById("resultadoConcentracao").value = "";
  document.getElementById("resultadoAgilidade").value = "";
}
