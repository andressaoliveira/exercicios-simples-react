const form = document.getElementById('form')
/* Adicionando atributos  */ 
function adicionaAtributo(Cid){
    /* obtendo valores dos pontos*/
    const ponto = document.getElementById('pt').value
    /* verificando se há pontos restantes  */
    if(ponto > 0){
        /* lendo valor do atributo e colocando em forma de numero inteiro */
        var atributo = parseInt(document.getElementById(Cid).value, 16)
        /* adicionando valor  */
        atributo += 1;
        /* enviando para tela  */
        document.getElementById(Cid).value = atributo 
        /* Mesmo processo com o restante dos pontos e retirando a quantidade */
        var restante = ponto
        console.log(restante)
        restante -= 1;
        document.getElementById('pt').value = restante

    }else{
        /* quando o restante chegar a 0 mostra um alerta  */
        alert("pontos totais já adicionados")
    }
}

/* removendo atributos  */
function removeAtributo(id){
    /* recebendo id do atributo e valor em forma de numero inteiro  */
    var atributo = parseInt(document.getElementById(id).value, 16)
    const ponto = document.getElementById('pt').value
    /* verificando se valor do atributo é maior que 0  */
    if(atributo > 0){
        /* retirando do atributo  */
        atributo -= 1;
        document.getElementById(id).value = atributo

        /*  adicionando no restante dos pontos */
        var restante = parseInt(ponto, 16)
        console.log(restante)
        restante += 1;
        document.getElementById('pt').value = restante

    }else{
        /* quando o atributo tiver 0 mostra um alerta  */
        alert("pontos totais já retirados")
    }
}

/* salvando personagem */
function finalizar(){
    /*  Obtendo campos */
    var nome = document.getElementById("nome").value
    var classe = document.getElementById("classe").value
    var raca = document.querySelector('input[name="raca"]:checked').value
    var atributo1 = document.getElementById("forca").value
    var atributo2 = document.getElementById("destreza").value
    var atributo3 = document.getElementById("inteligencia").value
    var atributo4 = document.getElementById("sabedoria").value

    /* verificando se não esta vazio  */
    if(nome != "" && classe != "" && raca != null){ 
        /*  criando elementos */
        const el = document.createElement('li');
        const formEl = document.createElement('form');
        const lblnome = document.createElement('input');
        const lblclasse = document.createElement('input');
        const lblraca = document.createElement('input');
        const lblatributo1 = document.createElement('input');
        const lblatributo2 = document.createElement('input');
        const lblatributo3 = document.createElement('input');
        const lblatributo4 = document.createElement('input');
        const inputElnome = document.createElement('input');
        const inputElclasse = document.createElement('input');
        const inputElraca = document.createElement('input');
        const inputElatributo1 = document.createElement('input');
        const inputElatributo2 = document.createElement('input');
        const inputElatributo3 = document.createElement('input');
        const inputElatributo4 = document.createElement('input');
        const divEl = document.createElement('div');
        /* Adicionado atributos dos elementos  */
        divEl.id = "corpo"
        lblatributo1.value = "Força"
        lblnome.value = "Nome"
        lblclasse.value = "Classe"
        lblraca.value = "Raça"
        lblatributo2.value = "Destreza"
        lblatributo3.value = "Inteligência"
        lblatributo4.value = "Sabedoria"
        inputElnome.type = "text";
        inputElnome.value = nome;
        inputElclasse.type = "text";
        inputElclasse.value = classe;
        inputElraca.type = "text";
        inputElraca.value = raca;
        inputElatributo1.type = "text";
        inputElatributo1.value = atributo1;
        inputElatributo2.type = "text";
        inputElatributo2.value = atributo2;
        inputElatributo3.type = "text";
        inputElatributo3.value = atributo3;
        inputElatributo4.type = "text";
        inputElatributo4.value = atributo4;

        /* adicionando um elemento dentro do outro  */
        el.append("Personagem Criado");
        divEl.appendChild(el)
        divEl.appendChild(lblnome)
        divEl.appendChild(inputElnome)
        divEl.appendChild(lblclasse)
        divEl.appendChild(inputElclasse)
        divEl.appendChild(lblraca)
        divEl.appendChild(inputElraca)
        divEl.appendChild(lblatributo1)
        divEl.appendChild(inputElatributo1)
        divEl.appendChild(lblatributo2)
        divEl.appendChild(inputElatributo2)
        divEl.appendChild(lblatributo3)
        divEl.appendChild(inputElatributo3)
        divEl.appendChild(lblatributo4)
        divEl.appendChild(inputElatributo4)
        formEl.appendChild(divEl)

        /* enviando pra tela  */

        document.querySelector('#finalizacao').appendChild(formEl);

        }else{
            /*  se houver atributos em branco mostra um alerta */
        alert("Ainda contem valores em branco")
    }
}

