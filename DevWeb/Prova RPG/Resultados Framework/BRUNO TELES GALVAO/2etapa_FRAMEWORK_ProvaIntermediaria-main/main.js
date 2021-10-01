//   Devido a ausência de tempo para fazer algo mais optimizado, e visando
// o aproveitamento do meu tempo já gasto no projeto, decidi manter a conta
// dos atributos nesse objeto.
const StatsButtonTracking = {
    MaximumValue: 10
}


                                                                            

                                                                            
//   A função a seguir é reponsavel pelo o funcionamento dos botões de 
// adicionar e remover pontos. Para aproveitar o códico, eu decidi usar
// apenas uma função, levando um valor dentro de uma switch (AddOrSubtract)
// que determina a operação a ser feita.

function StatsButton(addOrSubtract = false, senderAtribute)
{
    var Atributos_MaximumValue = document.querySelector('#Atributos_MaximumValue')
    var AtributeValueOutput = document.querySelector('#'+senderAtribute)
        //     Um dos atributos passados para essa função é usado para constuir o id 
        //   da input de onde estão os valores. 
    

    if(addOrSubtract==false)
    {
        if(AtributeValueOutput.value!=0)
        {
            var dummy = parseInt(Atributos_MaximumValue.value)
            dummy = dummy + 1
            Atributos_MaximumValue.value = dummy
            StatsButtonTracking['MaximumValue'] = dummy
            

            dummy = parseInt(AtributeValueOutput.value)
            dummy = dummy -1
            AtributeValueOutput.value = dummy
            StatsButtonTracking[senderAtribute] = dummy
            
        }   
    }
    else if(addOrSubtract==true)
    {
        if(AtributeValueOutput.value<10)
        {
            var dummy = parseInt(Atributos_MaximumValue.value)
            dummy = dummy - 1
            Atributos_MaximumValue.value = dummy
            StatsButtonTracking['MaximumValue'] = dummy
            

            dummy = parseInt(AtributeValueOutput.value)
            dummy = dummy + 1
            AtributeValueOutput.value = dummy
            StatsButtonTracking[senderAtribute] = dummy
            
        }
    }

}



// Essa funcao define os resultados finais e os aloca dentro da div de resultado.
function GenerateResults()
{
    var link_Input_Name = document.querySelector('#Input_Name')
    var link_Input_Class = document.querySelector('#Input_Class')

    var link_Input_Species = document.getElementsByClassName("Species_radioButton")
    var link_Input_Species__Selected

    // Aqui eu defino a especie (raca) que foi selecionada.
    for(var i = 0; i < link_Input_Species.length; i = i +1)
    {
        if (link_Input_Species[i].checked==true) {link_Input_Species__Selected = link_Input_Species[i]}  
    }
    
    
    
   //Pondo os resultados na divisao de resultados.
    document.querySelector('#Result_Name').value = link_Input_Name.value
    document.querySelector('#Result_Class').value = link_Input_Class.value
    document.querySelector('#Result_Species').value = link_Input_Species__Selected.value


    // Aqui, eu aplico os dados armazenados no obejto de rastreamento nos campos de resposta.
    if("Vigor" in StatsButtonTracking) {document.querySelector('#Result_Vigor').value = StatsButtonTracking.Vigor} else {document.querySelector('#Result_Vigor').value = 0}
    if("Fortitude" in StatsButtonTracking ) {document.querySelector('#Result_Endurance').value = StatsButtonTracking.Fortitude} else {document.querySelector('#Result_Endurance').value = 0}
    if("Vitalidade" in StatsButtonTracking ) {document.querySelector('#Result_Vitality').value = StatsButtonTracking.Vitalidade} else {document.querySelector('#Result_Vitality').value = 0}
    if("Forca" in StatsButtonTracking ) {document.querySelector('#Result_strength').value = StatsButtonTracking.Forca} else {document.querySelector('#Result_strength').value = 0}
    if("Conhecimento" in StatsButtonTracking) {document.querySelector('#Result_Attunement').value = StatsButtonTracking.Conhecimento} else {document.querySelector('#Result_Attunement').value = 0}
    if("Destreza" in StatsButtonTracking ) {document.querySelector('#Result_Dexterity').value = StatsButtonTracking.Destreza} else {document.querySelector('#Result_Dexterity').value = 0}
    if("Inteligencia" in StatsButtonTracking ) {document.querySelector('#Result_Intelligence').value = StatsButtonTracking.Inteligencia} else {document.querySelector('#Result_Intelligence').value = 0}
    if("Fé" in StatsButtonTracking ) {document.querySelector('#Result_Faith').value = StatsButtonTracking.Fé} else {document.querySelector('#Result_Faith').value = 0}
    if("Sorte" in StatsButtonTracking ) {document.querySelector('#Result_Luck').value = StatsButtonTracking.Sorte} else {document.querySelector('#Result_Luck').value = 0}


        

    //document.querySelector('#Result_Vigor').value = StatsButtonTracking.Vigor
    //document.querySelector('#Result_Endurance').value = StatsButtonTracking.Fortitude 
    //document.querySelector('#Result_Vitality').value = StatsButtonTracking.Vitalidade
    // document.querySelector('#Result_strength').value = StatsButtonTracking.Forca
    //document.querySelector('#Result_Attunement').value = StatsButtonTracking.Conhecimento
    //document.querySelector('#Result_Dexterity').value = StatsButtonTracking.Destreza
    // document.querySelector('#Result_Intelligence').value = StatsButtonTracking.Inteligencia
    // document.querySelector('#Result_Faith').value = StatsButtonTracking.Fé
    //document.querySelector('#Result_Luck').value = StatsButtonTracking.Sorte
    

}