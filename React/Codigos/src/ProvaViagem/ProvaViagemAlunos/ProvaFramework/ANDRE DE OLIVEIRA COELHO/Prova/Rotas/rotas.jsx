import React, { useState } from 'react'

export default class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lugares: ''
        };
    }

    changelugares = (valor) => {
        this.setState({ lugares: valor });
    };
    render (){
        return (<div className="lugares">
        <select name="select" onChange={(e) => this.changelugares(e.target.value)}>
            <option>Dubai</option>
            <option>Namekusei</option>
            <option>Vila da Folha</option>
        </select>
    </div>)
    }   
}