const pontos = document.getElementById("pontos")
const dev1 = document.getElementById("dev1-valor")
const dev2 = document.getElementById("dev2-valor")
const dev3 = document.getElementById("dev3-valor")

function incrementar(dev) {
    if (pontos.value <= 0) {
        alert('Não possui mais pontos!');
        return;
    }

    switch (dev) {
        case 'dev1':
            dev1.value++;
            pontos.value--;
            break;

        case 'dev2':
            dev2.value++;
            pontos.value--;
            break;

        case 'dev3':
            dev3.value++;
            pontos.value--;
            break;
        default:
            break
    };
}

function decrementar(dev) {
    if (pontos >= 15) {
        alert('Todos os pontos foram distribuidosF');
        return;
    }
    switch (dev) {
        case 'dev1':
            if (dev1.value > 0) {
                dev1.value--;
                pontos.value++;
            }
            break;

        case 'dev2':
            if (dev2.value > 0) {
                dev2.value--;
                pontos.value++;
            }
            break;

        case 'dev3':
            if (dev3.value > 0) {
                dev3.value--;
                pontos.value++;
            }
            break;
        default:
            break
    };
}

function enviar() {
    const resultado = document.getElementById("resultado")

    resultado.innerHTML =
        `
    <p>Desenvolvedor 1:  ${dev1.value}</p>
    <p>Desenvolvedor 2:  ${dev2.value} </p>
    <p>Desenvolvedor 3:  ${dev3.value}</p>
    `
}