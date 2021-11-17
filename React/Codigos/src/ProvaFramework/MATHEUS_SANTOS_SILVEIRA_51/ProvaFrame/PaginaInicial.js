import React from 'react';
import './Style.scss';



const ProvaFrame = () => {
        return(
        <div className="col">
            <div className="col-1">
                <div className="div">
                    <h1>Inicio</h1>
                    <h2>Escolha seu Destino</h2>
                    <div>
                        <select name="Destinos">
                            <option value="Miami" selected>Miami Beach</option>
                            <option value="California">Califórnia</option>
                            <option value="Transilvania">Transilvânia</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProvaFrame;
