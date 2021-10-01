import React from 'react';

export default class Idade extends React.Component {
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
