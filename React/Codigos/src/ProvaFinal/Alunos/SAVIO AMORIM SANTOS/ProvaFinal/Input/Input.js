import React from 'react';
import './Input.css';

export default class Botao extends React.Component {
    render() {
        const {onChange} = this.props;
        return (
            <div className="div_input">
                <input onChange={onChange}></input>
            </div>
        )
    }
}