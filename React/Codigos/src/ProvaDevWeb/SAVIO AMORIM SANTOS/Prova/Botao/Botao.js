import React from 'react';
import './Botao.css';

export default class Botao extends React.Component {
    render() {
        const {children, onClick} = this.props;
        return (
            <div className="div_button">
                <button onClick={onClick}>{children}</button>
            </div>
        )
    }
}