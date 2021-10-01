// criação de 4 variaveis globais cada uma para um dado diferente
// sendo dados para todos os valores que foram acresentados nos inputs
var dados = "";
// e nome para o input com name "nomeCliente"
var nome = " ";
// e conteudo para o input com name "conteudoCarga"
var conteudo = " ";
// e nome para o input com name "prazoEntrega"
var prazo = "00/00/00";

// criando um const que seleciona todas tags com nome form
const form = document.querySelector('form'); 

// evento enviar quando clicar no botão ou no enter
form.addEventListener('submit', function(enviar) {
    // quando a função for executada não atualizar a pagina
    enviar.preventDefault();
    // pegar os valores dos inputs
    const target = enviar.target;

    // pegar os valores dos inputs separadamente
    const value = target.elements.nomeCliente.value + ' - ' + target.elements.conteudoCarga.value + ' - ' + target.elements.prazoEntrega.value;
    // variavel global que é igual aos a value
    dados = value;

    // variaveis globais que são iguais a valores de inputs diferentes
    nome = target.elements.nomeCliente.value;
    conteudo = target.elements.conteudoCarga.value;
    prazo = target.elements.prazoEntrega.value;

    // criando um const que seleciona a tag com id espesifico
    const inseridos = document.querySelector("#inseridos");
    // const que vai criar um item na lista
    const item = document.createElement('li');
    // adicionar o que vai estar escrito dentro da tag li criada
    item.append(value);
    // adicionar a tag li na lista inseridos
    inseridos.appendChild(item);

    // resetar os alvos
    target.reset();
})

// criação da função que vai conferir se os valores colocados nos inputs são diferentes dos valores antigos
function editNome(event) {
    // pegar os valores dos inputs
    const target = event.target;
    // conferir o valor que foi pego
    console.log(target.value);

    // conferir se a variavel global nome é diferente ao valor que foi colocado
    if(nome != target.value){
        // conferir se passou aqui
        console.log("diferente de nome");
        // variavel global nome é igual ao valor que foi colocado
        nome = target.value;
    }

    // variavel global que é igual aos valores das variaveis globais
    dados = nome + "-" + conteudo + "-" + prazo;

    // criando um const que seleciona a tag com id espesifico
    const inseridos = document.querySelector("#inseridos");
    // const que vai criar um item na lista
    const item = document.createElement('li');
    // adicionar o que vai estar escrito dentro da tag li criada
    item.append(dados);
    // adicionar a tag li na lista inseridos
    inseridos.appendChild(item);
}

// criação da função que vai conferir se os valores colocados nos inputs são diferentes dos valores antigos
function editConteudo(event) {
    // pegar os valores dos inputs
    const target = event.target;
    // conferir o valor que foi pego
    console.log(target.value);

    // conferir se a variavel global conteudo é diferente ao valor que foi colocado
    if(conteudo != target.value){
        // conferir se passou aqui
        console.log("diferente de conteudo");
        // variavel global conteudo é igual ao valor que foi colocado
        conteudo = target.value;
    }

    // variavel global que é igual aos valores das variaveis globais
    dados = nome + "-" + conteudo + "-" + prazo;

    // criando um const que seleciona a tag com id espesifico
    const inseridos = document.querySelector("#inseridos");
    // const que vai criar um item na lista
    const item = document.createElement('li');
    // adicionar o que vai estar escrito dentro da tag li criada
    item.append(dados);
    // adicionar a tag li na lista inseridos
    inseridos.appendChild(item);
}

// criação da função que vai conferir se os valores colocados nos inputs são diferentes dos valores antigos
function editPrazo(event) {
    // pegar os valores dos inputs
    const target = event.target;
    // conferir o valor que foi pego
    console.log(target.value);

    // conferir se a variavel global prazo é diferente ao valor que foi colocado
    if(prazo != target.value){
        // conferir se passou aqui
        console.log("diferente de prazo");
        // variavel global prazo é igual ao valor que foi colocado
        prazo = target.value;
    }

    // variavel global que é igual aos valores das variaveis globais
    dados = nome + "-" + conteudo + "-" + prazo;

    // criando um const que seleciona a tag com id espesifico
    const inseridos = document.querySelector("#inseridos");
    // const que vai criar um item na lista
    const item = document.createElement('li');
    // adicionar o que vai estar escrito dentro da tag li criada
    item.append(dados);
    // adicionar a tag li na lista inseridos
    inseridos.appendChild(item);
}