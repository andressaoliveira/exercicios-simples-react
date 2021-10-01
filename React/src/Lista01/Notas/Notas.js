import React from 'react';

export default class Notas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercicio: null,
    };
  }

  render() {
    const { exercicio } = this.state;
    return (
      <div>
        Lista
      </div >
    )
  }
}
