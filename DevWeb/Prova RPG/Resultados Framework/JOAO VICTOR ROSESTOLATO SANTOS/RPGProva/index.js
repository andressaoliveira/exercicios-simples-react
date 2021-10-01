//Pegando os valores do html

const nomeInput = document.getElementById('nome');
const nomePersonagem = document.getElementById('character');

const classePersonagem = document.getElementById('classe');
const classP = document.getElementById('class');

const forca_Input = document.getElementById('forca');
const forca = document.getElementById('forcaF')

const dex = document.getElementById('dextreza');
const dexP = document.getElementById('dex')

const con = document.getElementById('constituicao');
const conP = document.getElementById('con')

//função para adicionar o atributo de força

function adicionaAtributo() {

    const forcaInput = document.getElementById('forca');
    const pontoInput = document.getElementById('pt');

    if(pontoInput.value > 0){
        forcaInput.value++;
        pontoInput.value--;
    }else{
        alert("Não há mais pontos usaveis");
    }

}

//função para adicionar o atributo de dextreza

function adicionaAtributoD() {

    const dexInput = document.getElementById('dextreza');
    const pontoInput = document.getElementById('pt');

    if(pontoInput.value > 0){
        dexInput.value++;
        pontoInput.value--;
    }else{
        alert("Não há mais pontos usaveis");
    }

}

//função para adicionar o atributo de constituição

function adicionaAtributoC() {

    const conInput = document.getElementById('constituicao');
    const pontoInput = document.getElementById('pt');

    if(pontoInput.value > 0){
        conInput.value++;
        pontoInput.value--;
    }else{
        alert("Não há mais pontos usaveis");
    }

}

//funçao para remover o atributo de força

function removeAtributo(){

    const forcaInput = document.getElementById('forca');
    const pontoInput = document.getElementById('pt');

    if(forcaInput.value > 0){
        
        forcaInput.value--;
        pontoInput.value++;

    }else{
        alert("Não há valor a ser removido");
    }
}

//funçao para remover o atributo de dextreza

function removeAtributoD(){

    const dexInput = document.getElementById('dextreza');
    const pontoInput = document.getElementById('pt');

    if(dexInput.value > 0){
        
        dexInput.value--;
        pontoInput.value++;

    }else{
        alert("Não há valor a ser removido");
    }
}

//funçao para remover o atributo de constituição

function removeAtributoC(){

    const conInput = document.getElementById('constituicao');
    const pontoInput = document.getElementById('pt');

    if(conInput.value > 0){
        
        conInput.value--;
        pontoInput.value++;

    }else{
        alert("Não há valor a ser removido");
    }
}

//função para imprimir os valores na tela ao aperat o botão "salvar"

function rodar() {

    //para pegar o valor do input type radio foi necessario que seja adquirido ao apertar o botão já que ao colocar fora do butão ocorria um erro na hora de receber um valor

    const raca = document.querySelector('input[name="raca"]:checked').value;
    const racaPersonagem = document.getElementById('racaP');

    nomePersonagem.value = nomeInput.value;
    var textoNome = document.getElementById("forcaF");
    textoNome.innerText = nomePersonagem.value;

    classP.value = classePersonagem.value;
    var textoclass = document.getElementById("character");
    textoclass.innerText = classP.value;

    racaPersonagem.value = raca;
    var textoraca = document.getElementById("class");
    textoraca.innerText = racaPersonagem.value;

    forca.value = forca_Input.value;
    var textoforca = document.getElementById("racaP");
    textoforca.innerText = forca.value;

    dexP.value = dex.value;
    var textodex = document.getElementById("dex");
    textodex.innerText = dexP.value;

    conP.value = con.value;
    var textocon = document.getElementById("con");
    textocon.innerText = conP.value;
}
