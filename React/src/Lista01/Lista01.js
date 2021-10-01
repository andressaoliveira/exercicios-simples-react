import React from 'react';
import Triangulo from '../Triangulo/Triangulo';
import Idade from './Idade/Idade';
import Notas from './Notas/Notas';
import Contador from './Contador/Contador';


export default class Lista01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercicio: null,
    };
  }

  renderExercicios(){
  const { exercicio } = this.state;
  switch (exercicio) {
    case 'triangulo':
      return <Triangulo />
    case 'notas':
      return <Notas/>
    case 'calculo':
      return <Calculo />
    case 'contador':
      return <Contador />
    case 'idade':
      return <Idade />
    default:
    return null;
  }
}

render() {
  return (
    <div>
      {this.renderExercicios()}
    </div >
  )
}
}
