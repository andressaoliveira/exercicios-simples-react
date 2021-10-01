//Lutz
alert("Bem Vindo ao RPG")
// 
var pontos = 10;
//função para encrementar valor do atributo
function adicionaAtributo(id) {
  if (pontos > 0) {
    var input = document.getElementById(id);
    input.value = Number(input.value) + 1;
    pontos--;
   adicionarPontos();
  }
}
// função para decrementar valor do atributo
function removeAtributo(id) {
  if (pontos < 10) {
    var input = document.getElementById(id);
    input.value = Number(input.value) - 1;
    pontos++;
    adicionarPontos();
  }
}
//função para renderizar valor dos pontos no input total
function adicionarPontos() {
  document.getElementById("pt").value = pontos;
}
//função para retomar os valores dos inputs de cadastro nos campos de resultado
function enviar() {
  document.getElementById("n").value = document.getElementById("nome").value;
  document.getElementById("c").value = document.getElementById("classe").value;
  document.getElementById("r").value = document.querySelector('input[name="raca"]:checked').value;
  document.getElementById("f").value = document.getElementById("forca").value;
  document.getElementById("d").value = document.getElementById("destreza").value;
  document.getElementById("s").value = document.getElementById("sabedoria").value;
  document.getElementById("i").value = document.getElementById("inteligencia").value;
}





