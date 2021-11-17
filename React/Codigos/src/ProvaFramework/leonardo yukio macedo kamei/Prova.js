import React from 'react'
import Combustivel from './rotas/Combustivel/Combustivel'
import Destinos from './rotas/Destinos/Destinos'
import Pagina1 from './rotas/Página1/Pagina'

export default class Prova extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        aba: 1
      }
  }
  combustivel(novaAba) {
    this.setState({
      aba: novaAba
    })
  }
  renderC(aba){
    switch (aba) {
      case 1:
        return <Pagina1 />
      case 2:
        return <Combustivel />
      case 3:
        return <Destinos />
      default:
        return null;        
    }
  }

render() {
  const {aba} = this.state;
  return (
    <div className="App">
        <ul>
          <li><button onClick={() => this.combustivel(1)}>Página Inicial</button></li>
          <li><button onClick={() => this.combustivel(3)}>Destinos</button></li>
          <li><button onClick={() => this.combustivel(2)}>Combustível</button></li>
          </ul>
          {this.renderC(aba)}
    </div>
  );
}
}