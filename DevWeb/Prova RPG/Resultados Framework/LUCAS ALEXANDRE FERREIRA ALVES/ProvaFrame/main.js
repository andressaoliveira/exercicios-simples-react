
function prova(event) {
    const target = event.target;
    console.log(target.value);

    const provaf = document.querySelector("#PEDIDOS");
    const item = document.createElement('li');
	//Função que irá organizar o texto em uma lista 
    item.append(target.value);
    provaf.appendChild(item);

    target.value = '';
}//Função que irá escrever o id na tela por meio de uma lista.