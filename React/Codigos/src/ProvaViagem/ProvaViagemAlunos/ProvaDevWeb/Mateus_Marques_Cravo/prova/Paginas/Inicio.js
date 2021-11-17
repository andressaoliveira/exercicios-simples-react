import React from 'react';

const Inicio = () => {
      return (
        <div className="Prova">
             <h1>Inicio</h1>
             <span>Escolha seu destino: </span><br />
             <select>
                <option value="SaoTome">São Thomé das Letras</option>
                <option value="Capitolio">Capitólio</option>
                <option value="SerraCipo">Serra do Cipó</option>
            </select>
        </div>
      );
}

export default Inicio;