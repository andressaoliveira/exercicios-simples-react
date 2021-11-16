import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Botao(props) {
    console.log(props)
    return<Button variant={props.children}>{props.children}</Button>
}

export default Botao;