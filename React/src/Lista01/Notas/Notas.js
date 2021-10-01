import React from 'react';

export default class Notas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercicio: null,
    };
  }

  render() {
    return (
      <div>
        Notas
      </div >
    )
  }
}
