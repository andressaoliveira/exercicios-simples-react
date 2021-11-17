import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React from 'react';

export class Botao extends React.Component {

    render() {
        return (
            <Button variant={this.props.variant} onClick={this.props.onClick}>{this.props.children}</Button>
        )
    }
}