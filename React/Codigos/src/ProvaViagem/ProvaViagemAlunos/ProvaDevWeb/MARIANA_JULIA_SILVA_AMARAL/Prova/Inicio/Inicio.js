import React from "react";

export default class Inicio extends React.Component {
    render() {
        return (
            <div className="inicio">
               <h2>Início</h2>
               <p>Visualize seus destinos:</p>
               <select>
                   <option>Rio de Janeiro</option>
                   <option>Porto Seguro</option>
                   <option>Maragogi</option>
               </select>
            </div>
        )
    }
}