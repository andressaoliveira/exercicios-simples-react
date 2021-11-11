import React from 'react';
import MediaPonderada from './MediaPonderada/MediaPonderada';
import Ordenacao from './Ordenacao/Ordenacao';
import Expressao from './Expressao/Expressao';
import Divisivel from './Divisivel/Divisivel';
import ConversaoGraus from './ConversaoGraus/ConversaoGraus';

export default class Lista02 extends React.Component {
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
      case 'MediaPonderada':
        return <MediaPonderada />
      case 'Ordenacao':
        return <Ordenacao />
      case 'Expressao':
        return <Expressao />
      case 'Divisivel':
        return <Divisivel />
      case 'ConversaoGraus':
        return <ConversaoGraus />
      default:
        return 'Selecione um exercicio';
    }
  }

  render() {
    const exercicios = ['MediaPonderada', 'Ordenacao', 'Expressao', 'Divisivel', 'ConversaoGraus'];
    return (
      <div>
        <h1>Lista 2</h1>
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
