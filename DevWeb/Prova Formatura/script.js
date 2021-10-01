function inserir() {
    let nomeNode = document.getElementById('nome');
    let cursoNode = document.getElementById('curso');
    let generoNode = document.querySelector('input[name="genero"]:checked');
    let convidadosNode = document.getElementById('convidados-valor');

    const nomeValor = nomeNode.value;
    const cursoValor = cursoNode.value;
    const generoValor = generoNode.value;
    const convidadosValor = parseInt(convidadosNode.value);

    nomeNode.value = null;
    cursoNode.value = "Informática";
    document.querySelector('input[value="Masculino"]').checked = true;
    convidadosNode.value = 0;

    const alunoStr = localStorage.getItem('alunos');
    const aluno = {
        nome: nomeValor,
        curso: cursoValor,
        genero: generoValor,
        convidados: convidadosValor
    }
    let alunos = [];

    if (alunoStr) {
        alunos = JSON.parse(alunoStr);
    }
    alunos.push(aluno)
    localStorage.setItem('alunos', JSON.stringify(alunos));
    console.log({ alunos });

}

function incrementar(tipo) {
    let incremento = document.getElementById('convidados-valor')
    if (tipo == '+' && incremento.value < 5) {
        incremento.value++;
    }

    if (tipo == '-' && incremento.value > 0) {
        incremento.value--;
    }
}

function exibir() {
    const alunosStr = localStorage.getItem('alunos');
    if (!alunosStr) {
        alert('Não há alunos cadastrados');
        return
    }
    const alunos = JSON.parse(alunosStr);

    const alunosHtml = document.createElement('ul');
    alunosHtml.id = "alunos";
    alunos.forEach(item => {
        const li = document.createElement('li');
        const retorno = item.nome + ' - ' + item.curso + ' - ' + item.genero + ' - ' + item.convidados;
        const itemText = document.createTextNode(retorno);
        li.appendChild(itemText);
        alunosHtml.appendChild(li);
    });

    const resultado = document.getElementById("resultado");
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
    resultado.appendChild(alunosHtml);
}

function limpar() {
    localStorage.removeItem('alunos');
    const resultado = document.getElementById("resultado");
    if (!resultado.firstChild) {
        alert('Não há alunos cadastrados')
        return;
    }
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}