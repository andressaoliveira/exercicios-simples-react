//Maria Alice Dias Torres 11900652 36

//declaração do valor inicial dos pontos
var pontos = 10

//função para incrementar o input de força
function adiciona(valorMaximo, id){
	var For = parseInt(document.getElementById(id).value,10);
    //verifica se é um número mesmo
    For = isNaN(For) ? 0 : For;
  if(For >= valorMaximo) {
    For = valorMaximo;
  }else{
    //incremento e decremento dos pontos de acordo com o aumento de força
    For++;
    pontos--;
  }
  //renderiza os valores dos pontos totais e do ponto de força, em cada input
  document.getElementById(id).value = For;
  document.getElementById("pt").value = pontos;
}

//função para decrementar o input de forca
function remove(valorMinimo, id){
  var For = parseInt(document.getElementById(id).value,10);
  For = isNaN(For) ? 0 : For;
  /*se o input já estiver em zero e o usuário quiser diminuir,
  não consegue, pois abaixo de 0(minValue) ele sempre recebe esse valor*/
  if(For <= valorMinimo) {
    For = 0;
  }else{
    For--;
    pontos++;
  }

  document.getElementById(id).value = For;
  document.getElementById("pt").value = pontos;
}

//função para incrementar o input de agilidade
function adicionaa(valorMaximo, id){
	var Agil = parseInt(document.getElementById(id).value,10);
    Agil = isNaN(Agil) ? 0 : Agil;
  if(Agil >= valorMaximo) {
    Agil = valorMaximo;
  }else{
    Agil++;
    pontos--;
  }

  document.getElementById(id).value = Agil;
  document.getElementById("pt").value = pontos;
}

//função para decrementar o input de agilidade
function removee(valorMinimo, id){
  var Agil = parseInt(document.getElementById(id).value,10);
  Agil = isNaN(Agil) ? 0 : Agil;
  if(Agil <= valorMinimo) {
    Agil = 0;
  }else{
    Agil--;
    pontos++;
  }

  document.getElementById(id).value = Agil;
  document.getElementById("pt").value = pontos;
}

//função chamada ao clicar no botão Enviar
function enviar(){   

    //declaração das variáveis pegando pelo Id e Name
    var nome = document.getElementById("nome")
    var classe = document.getElementById("classe")
    var raca = document.getElementsByName("raca")

    //captura qual a opção selecionada pelo usuário
    var classeEscolhida = classe.options[classe.selectedIndex].value

    //captura o radio button clicado pelo usuário de acordo com seu index
    for (var i = 0 in raca){
    if (raca[i].checked)
    document.getElementById("Raça").value = raca[i].value
    }

    //renderiza nos inputs do resultado o valor pego pela variavel do personagem (nome, classe, raca, força e agilidade)
    document.getElementById("Nome").value = nome.value
    document.getElementById("Classe").value = classeEscolhida
    document.getElementById("Força").value = document.getElementById("forca").value
    document.getElementById("Agilidade").value = document.getElementById("agilidade").value
}


