import React from 'react';
import Select from '../Select/Select';

export default class Inicio extends React.Component {

    render () {
        return (
            <div className="content">
                <h1>INICIO</h1>
                <div>
                    <label>Escolha seu destino:</label>
                    <Select></Select>
                </div>
            </div>   
        )
    }
}