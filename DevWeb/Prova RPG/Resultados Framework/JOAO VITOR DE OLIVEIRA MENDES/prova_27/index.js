const nome = document.getElementById("nome")
const tipo = document.getElementById("tipo")
const raca = document.getElementsByName("raca")
const pt = document.getElementById("pt")

const forca = document.getElementById("forca")
const inteligencia = document.getElementById("inteligencia")
const destreza = document.getElementById("destreza")
const magia = document.getElementById("magia")

const resultado = document.getElementById("resultado")

/**
 * Seleciona no Html todas as referencias de input
 * 
 * Inicializa a variavel de pontos para controlar a distribuicao 
 */

var pontos = 10

/**
 * 
 * @param { Recebe o id do campo a adicionar/subtrair pontos } id 
 * 1. Checa se a quantidade de pontos e valida para a operacao,
 * 2. Num switch checa qual o id para adicionar/subtrair,
 * 3. Checa se e valido adicionar/subtrair do campo,
 * 4. Finalmente addiciona 1 ao campo, subtrai 1 dos pontos totais e atualiza o input de campos
 */
function add(id) {
    if(pontos > 0) {
        switch(id) {
            case 'forca': {
                if(forca.value < 10) {
                    forca.value++;
                    pontos--;
                    pt.value = pontos;
                }
            }; break;
            case 'inteligencia': {
                if(inteligencia.value < 10) {
                    inteligencia.value++;
                    pontos--;
                    pt.value = pontos;
                }
            }; break;
            case 'destreza': {
                if(destreza.value < 10) {
                    destreza.value++;
                    pontos--;
                    pt.value = pontos;
                }
            }; break;
            case 'magia': {
                if(magia.value < 10) {
                    magia.value++;
                    pontos--;
                    pt.value = pontos;
                }
            }; break;
        }
    }
}
function subtract(id) {
    if(pontos < 10){
        switch(id) {
            case 'forca': {
                if(forca.value > 0) {
                    forca.value--;
                    pontos++;
                    pt.value = pontos;
                }
            }; break;
            case 'inteligencia': {
                if(inteligencia.value > 0) {
                    inteligencia.value--;
                    pontos++;
                    pt.value = pontos;
                }
            }; break;
            case 'destreza': {
                if(destreza.value > 0) {
                    destreza.value--;
                    pontos++;
                    pt.value = pontos;
                }
            }; break;
            case 'magia': {
                if(magia.value > 0) {
                    magia.value--;
                    pontos++;
                    pt.value = pontos;
                }
            }; break;
        }
    }
}

/**
 * Volta todos os campos ao valor inicial e deleta os resultados
 */

function limpar() {
    nome.value = null
    tipo.value = "Guerreiro"
    raca.value = "Humano"
    forca.value = 0
    inteligencia.value = 0
    destreza.value = 0
    magia.value = 0
    pontos = 10
    pt.value = pontos
    resultado.innerHTML = ``
}

/**
 * 1. Checa qual valor de raca foi selecionado e atribui seu valor a uma variavel
 * 2. Atribui a div de resultado um html basico com todos os valores
 */

function send() {
    var racaVal = null
    raca.forEach((val) => {
        if(val.checked) {
            racaVal = val.value
        }
    })
    resultado.innerHTML = `
    <div class="col-12 p-3 input-group">
        <label class="fw-bold input-group-text">Nome: </label>
        <input value="${nome.value}" disabled class="form-control">
    </div>
    <div class="col-12 p-3 input-group">
        <label class="fw-bold input-group-text">Tipo: </label>
        <input value="${tipo.value}" disabled class="form-control">
    </div>
    <div class="col-12 p-3 input-group">
        <label class="fw-bold input-group-text">Raca: </label>
        <input value="${racaVal}" disabled class="form-control">
    </div>
    <div class="col-12 p-3 input-group">
        <label class="fw-bold input-group-text">Forca: </label>
        <input value="${forca.value}" disabled class="form-control">
    </div>
    <div class="col-12 p-3 input-group">
        <label class="fw-bold input-group-text">Inteligencia: </label>
        <input value="${inteligencia.value}" disabled class="form-control">
    </div>
    <div class="col-12 p-3 input-group">
        <label class="fw-bold input-group-text">Destreza: </label>
        <input value="${destreza.value}" disabled class="form-control">
    </div>
    <div class="col-12 p-3 input-group">
        <label class="fw-bold input-group-text">Magia: </label>
        <input value="${magia.value}" disabled class="form-control">
    </div>
    `
}


