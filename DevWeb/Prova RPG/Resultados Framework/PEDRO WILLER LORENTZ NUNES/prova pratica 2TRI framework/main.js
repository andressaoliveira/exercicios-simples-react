var increase = document.getElementsByClassName("inc");
var decrease = document.getElementsByClassName("dec");
var inputStr = document.getElementById("str");
var inputDex = document.getElementById("dex");
var inputSab = document.getElementById("sab");
var inputInt = document.getElementById("int");
var pontosAtuais = document.getElementById("maxPoints");
var maxPoints = 10;
// resultados
var resultNome = document.getElementById("resultNome");
var resultClsase = document.getElementById("resultClsase");
var resultRaca = document.getElementById("resultRaca");
var resultStr = document.getElementById("resultStr");
var resultDex = document.getElementById("resultDex");
var resultSab = document.getElementById("resultSab");
var resultInt = document.getElementById("resultInt");


// Incrementar valor
for (var i = 0; i < increase.length; i++) {
  var button = increase[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    // console.log(buttonClicked); pega o html do botao
    var input = buttonClicked.parentElement.children[3];
    // console.log(input); pega o componente pai do botao e pega o terceiro componente filho dentro dele (o input)
    var inputValue = input.value;
    // console.log(inputValue); pega o value dentro do input
    var newValue = parseInt(inputValue) + 1;
    // console.log(newValue); adiciona +1 ao input
    if (maxPoints >= 1) { // se a variavel maxpoints for maior ou igual a 1, o valor do input vira o newValue (o valor e determinado por quantas vezes o usuario apertou o botao) e tira -1(ou mais dependendo da quantidade de vezes que ele apertou o botao) da maxPoints
      input.value = newValue;
      maxPoints--;
      pontosAtuais.innerHTML = maxPoints;
    } else {
      alert("Voce usou todos os seus pontos");
    }
  });
}

// Decrementar valor
for (var i = 0; i < decrease.length; i++) {
  var button = decrease[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    // console.log(buttonClicked);
    var input = buttonClicked.parentElement.children[3];
    // console.log(input);
    var inputValue = input.value;
    // console.log(inputValue);
    var newValue = parseInt(inputValue) - 1;
    // console.log(newValue);
    if (newValue >= 0) {
      input.value = newValue;
      maxPoints++;
      pontosAtuais.innerHTML = maxPoints;
    } else {
      alert("O valor nao pode ser inferior a 0");
    }
  });
}


function getSelectValue() { // pega o value do componente Select e torna o input da classe igual a ele
  var selectValue = document.getElementById("selectField").value
  resultClasse.value = selectValue
  return ;
}

function radio() { // pega a opcao selecionada do radio e seu valor, tornando o input da raca igual a ele 
  var selectedOption = document.querySelector('input[name="option"]:checked');
  radioValue = selectedOption.value;
  resultRaca.value = radioValue;
}

function getName() { // pega o valor do input de texto pro nome e atribui ele ao input de nome do resultado
  var nameValue = document.getElementById("name").value
  // console.log(nameValue)
  resultNome.value = nameValue
  return;
}

function sendMods() { // torna os resultados dos inputs de modificadores iguais aos modificadores selecionados no campo de edicao 
  resultStr.value = inputStr.value
  resultDex.value = inputDex.value
  resultSab.value = inputSab.value
  resultInt.value = inputInt.value

}