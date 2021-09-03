function inserirValorMediaPonderada() {
    const notaValor = parseInt(document.getElementById('nota').value);
    const pesoValor = parseInt(document.getElementById('peso').value);

    const notasStr = localStorage.getItem('notas');
    const nota = {
        nota: notaValor,
        peso: pesoValor
    }
    let notas = [];

    if (notasStr) {
        notas = JSON.parse(notasStr);
    }
    notas.push(nota)
    localStorage.setItem('notas', JSON.stringify(notas));
}

function calcularMediaPonderada() {
    const notasStr = localStorage.getItem('notas');
    const notas = JSON.parse(notasStr);
    localStorage.removeItem('notas');
    let somaPesos = 0;
    let somaNotas = 0;

    notas.forEach(nota => {
        console.log(nota);
        somaNotas += nota.nota * nota.peso;
        somaPesos += nota.peso;
    });
    console.log('Media ponderada: ', { somaNotas, somaPesos, resultado: somaNotas / somaPesos })
}

function trocarDeCor() {
    const lista1 = document.getElementById('lista01');
    const lista2 = document.getElementById('lista02');
    if (lista1) {
        lista1.id = 'lista02'
    }

    if (lista2) {
        lista2.id = 'lista01'
    }
}

function incrementar(tipo) {
    let incremento = document.getElementById('valor-incremento')
    if (tipo == '+' && incremento.value < 5) {
        incremento.value++;
    }

    if (tipo == '-' && incremento.value > 0) {
        incremento.value--;
    }

}

function calcularDivisivel() {
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)
    console.log(num1, num2)

    if (num1 % num2 == 0) {
        console.log("É divisível")
    }
    else
        console.log("Não é divisível")
}

function calcularMes() {
    const numero = parseInt(document.getElementById('num-mes').value);
    let mes = null;
    switch (numero) {
        case 1:
            mes = "Janeiro"
            break;
        case 2:
            mes = "Fevereiro"
            break;
        case 3:
            mes = "Março"
            break;
        case 4:
            mes = "Abril"
            break;
        case 5:
            mes = "Maio"
            break;
        case 6:
            mes = "Junho"
            break;
        case 7:
            mes = "Julho"
            break;
        case 8:
            mes = "Agosto"
            break;
        case 9:
            mes = "Setembro"
            break;
        case 10:
            mes = "Outubro"
            break;
        case 11:
            mes = "Novembro"
            break;
        case 12:
            mes = "Dezembro"
            break;
        default:
            mes = "Valor de mês incorreto"
    }

    console.log(mes)
}