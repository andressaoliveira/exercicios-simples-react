import React from 'react';

export default class Pagina1 extends React.Component {

    render() {
        return (
            <div>
                <label> Escolha seu destino: </label> <br />
                <select id="cidades" name="cidades">
                <option value="bh">bh</option>
                <option value="sp">sp</option>
                <option value="rj">rj</option>
                </select>
            </div>
        );
    }
}
/*
export default class Pagina1 extends React.Component {
    constructor(props) {
        super(props)
          this.state = {
            opValue: 1
          }
        }
        cidade(newValue){
            this.setState({
                opValue: newValue
            })

        }
        opChange(opValue){
            switch (opValue){
                case 1:
                    return <BH />
            }
        }

    render() {
        return (
            <div>
                <label> Escolha seu destino: </label> <br />
                <select id="cidade">
                <option onChange={this.setState.cidade(1)}>São Paulo</option>
                <option onChange={this.setState.cidade(2)}>Belo Horizonte</option>
                <option onChange={this.setState.cidade(3)}>Rio de Janeiro</option>
                </select>
            </div> 
        ); 
    }
}
*/