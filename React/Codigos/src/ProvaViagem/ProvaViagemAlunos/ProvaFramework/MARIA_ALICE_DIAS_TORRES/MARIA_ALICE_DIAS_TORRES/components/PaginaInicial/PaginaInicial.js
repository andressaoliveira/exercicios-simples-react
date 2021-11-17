import React from 'react';

//funcao que ira exibir o select com as options dos paises de destino
//sera chamada ao clicar no link de paginaInicial no menu
function PaginaInicial(){
    return(
        <div className="home">
        <form>
        <h2>Veja abaixo os locais de destino disponíveis:</h2>
          <p>
          <select>
            <option value="França">França</option>
            <option value="Austrália">Austrália</option>
            <option value="Portugal">Portugal</option>
            <option value="Marrocos">Marrocos</option>
          </select>
          </p>
      </form>
      </div>
    );
};

export default PaginaInicial;