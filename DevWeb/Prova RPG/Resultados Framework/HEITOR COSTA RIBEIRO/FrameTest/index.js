const form = document.querySelector('form');//aqui é para pegar o formulário

form.addEventListener('submit',function(event){
    event.preventDefault(); //para não att a pagina
    const target = event.target;


    
    const value = target.elements.name.value +' - '+ //aqui é pra adicionar os input's na tela 
    target.elements.Classe.value +' - '+
    target.elements.Raca.value +' - '+ 
    target.elements.forca.value  +' - '+
    target.elements.dest.value  +' - '+ 
    target.elements.sabe.value  +' - '+ 
    target.elements.inte.value  ;

    console.log(value);
  
    const historico = document.querySelector("#list");//aqui é pra buscar o id "list"

        const item =  document.createElement('li');//aqui cria um elemento "li"
            item.append(value); //adiciona os valores dos input's
                historico.appendChild(item);//adiciona os valores na tela 

                form.reset();//limpa o formulario
})

