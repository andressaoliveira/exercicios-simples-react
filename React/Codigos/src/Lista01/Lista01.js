import React from 'react';
import Triangulo from './Triangulo/Triangulo';
import Idade from './Idade/Idade';
import Notas from './Notas/Notas';
import Contador from './Contador/Contador';
import Calculo from './Calculo/Calculo';


export default class Lista01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercicio: null,
    };
  }

  mudaExercicio(newExercicio) {
    this.setState({
      exercicio: newExercicio
    })
  }

  renderExercicios() {
    const { exercicio } = this.state;
    switch (exercicio) {
      case 'Triangulo':
        return <Triangulo />
      case 'Notas':
        return <Notas />
      case 'Calculo':
        return <Calculo />
      case 'Contador':
        return <Contador />
      case 'Idade':
        return <Idade />
      default:
        return 'Selecione um exercicio';
    }
  }

  render() {
    const exercicios = ['Triangulo', 'Notas', 'Calculo', 'Contador', 'Idade'];
    return (
      <div>
        <h1>Lista 1</h1>
        <div>
          {
            exercicios.map((ex, key) => (
              <button onClick={() => this.mudaExercicio(ex)} key={key}>
                {ex}
              </button>
            ))
          }
        </div>
        {this.renderExercicios()}
      </div >
    )
  }
}
