import React from 'react';
import './Select.css';

export default class Select extends React.Component {
    render() {
        return (
            <div className="div_select">
                <select name="destinos" id="destinos">
                    <option value="select1">Jalapao - TO</option>
                    <option value="select2">Bonito - MS</option>
                    <option value="select3">Chapada dos Veadeiros - GO</option>
                </select>
            </div>
        )
    }
}