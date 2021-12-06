import React from 'react';
import api from '../Menu/api';

export default class Senador extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Senador: null
    }
  }

  componentDidMount() {
    api.get("/44")
      .then((response) => this.setSenador(response.data))
  }

  setSenador(dados) {
    this.setState({
      Senador: dados,
      
    })
  }

  pesquisar(texto) {
    const { Senador } = this.state;
    
    this.setState({
    
    })
  }

  render() {
    const { senador } = this.state;
    return (
      <div className="SENADOR">
        <h1>SENADOR</h1>
        <input onChange={(e) => this.pesquisar(e.target.value)} />
        <ul>
          {
           
                <p>Nome: {senador}</p>
                
              
            
          }
        </ul>
      </div>
    );
  }
}