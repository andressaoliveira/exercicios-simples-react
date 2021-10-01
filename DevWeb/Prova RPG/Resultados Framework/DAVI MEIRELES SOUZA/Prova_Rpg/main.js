
//aqui eu declaro as minhas variáveis de entrada 
const nome = document.getElementById('nome');
const classe = document.getElementById('classe');
const forca_value = document.getElementById('forca');
const intel_value = document.getElementById('intel');
const sabe_value = document.getElementById('sabe');
const dest_value = document.getElementById('dest');
const pt = document.getElementById('pt');

//aqui eu puxo os campos que vão ser preenchidos
const nomeR = document.getElementById('nomeR');
const forcaR = document.getElementById('forcaR');
const intelR = document.getElementById('inteligenciaR');
const sabeR = document.getElementById('sabedoriaR');
const descR = document.getElementById('destrezaR');
const classR = document.getElementById('classR');
const raceR = document.getElementById('raceR');

// A função pega de paramentro uma string que é enviada quando a função é chamada no html
function adicionaAtributo(atric){


// aqui eu faço um switch case para decidir qual atributor eu vou aumentar
    switch (atric) {

        case 'forca':
            
        forca_value.value++;
        pt.value--;

        ; break;

        case 'intel':
            
        intel_value.value++;
        pt.value--;

        ; break;

        case 'sabe': 

        sabe_value.value++;
        pt.value--;
        
        ; break;

        case 'dest': 

        dest_value.value++;
        pt.value--;
        
        ; break;

        default:
            
        console.log("acho que é impossivel isso aparecer");

        ;

    }

}

// A função pega de paramentro uma string que é enviada quando a função é chamada no html
function removeAtributo(atric){

    //aqui eu faço um switch case para decidir qual atributor eu vou diminuir
    switch (atric) {

        case 'forca':
            
        forca_value.value--;
        pt.value++;

        ; break;

        case 'intel':
            
        intel_value.value--;
        pt.value++;

        ; break;

        case 'sabe': 

        sabe_value.value--;
        pt.value++;
        
        ; break;

        case 'desc': 

        dest_value.value--;
        pt.value++;
        
        ; break;

        default:
            
        console.log("acho que é impossivel isso aparecer");

        ;

    }

}

//essa função eu atribuo o valor selecionado ao valor que vai ser setado
function Criar(){

    classR.value = classe.value;
    nomeR.value = nome.value;
    forcaR.value = forca_value.value;
    sabeR.value = sabe_value.value;
    intelR.value = intel_value.value;
    descR.value = dest_value.value;

    
 const raca = document.querySelector('input[name="raca"]:checked').value;

    switch(raca){

        case "Humano":

        raceR.value = "Humano";

            ; break;

         case "Anão":
            
        raceR.value = "Anão";

            ; break;
        
         case 'Elfo':

        raceR.value = "Elfo";
            
            ; break;

        default:
        console.log("algo deu errado")    
        ;

    }

}
