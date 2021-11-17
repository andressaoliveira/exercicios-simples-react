import React from 'react'


const select = {width: '15%', height: "10%"}



function pagina_inicial(){  return(


        <div>
            <h1>Início</h1>
            <div style={{height: "2pt"}}></div>
            <h2>Escolha seu destino</h2>

            <select style={select}>
                <option>Cazaquistão</option>
                <option>Moldova</option>
                <option>Zimbabwe</option>
            </select>

        </div>

        
        


    );

}


export default pagina_inicial;