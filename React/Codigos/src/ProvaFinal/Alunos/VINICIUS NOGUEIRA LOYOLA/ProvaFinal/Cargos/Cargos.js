import React from 'react';
import api from '../Menu/api';

export default class Cargos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Cargos: null
    }
  }

  componentDidMount() {
    api.get("/44/cargos")
      .then((response) => this.setCargos(response.data))
  }

  setCargos(dados) {
    this.setState({
      Cargos: dados,
      
    })
  }

  pesquisar(texto) {
    const { cargos } = this.state;
    
    this.setState({
    
    })
  }

  render() {
    const { cargos } = this.state;
    return (
      <div className="CARGOS">
        <h1>CARGOS</h1>
        <input onChange={(e) => this.pesquisar(e.target.value)} />
        <ul>
          {
           
                <p>Nome: {Cargos}</p>
                
              
            
          }
        </ul>
      </div>
    );
  }
}

