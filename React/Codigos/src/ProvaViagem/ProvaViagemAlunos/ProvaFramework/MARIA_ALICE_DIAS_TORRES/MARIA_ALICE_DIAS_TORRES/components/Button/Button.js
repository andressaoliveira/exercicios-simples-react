import React from 'react';
import '../Prova.css';

export default class Button extends React.Component {
    render() {
        const { children, onClick } = this.props;
        return (
            <div>
                <button onClick={onClick}>{children}</button>
            </div>
        )
    }
}