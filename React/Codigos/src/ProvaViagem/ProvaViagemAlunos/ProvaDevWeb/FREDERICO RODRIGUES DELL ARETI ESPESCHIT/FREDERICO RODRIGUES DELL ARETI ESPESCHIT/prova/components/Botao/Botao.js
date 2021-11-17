import React from 'react';
import "./btn.scss";

export default class Botao extends React.Component {
    render() {
        const { children, onClick } = this.props;
        return (
            <div>
                <button onClick={onClick}>{children}</button>
            </div>
        )
    }
}