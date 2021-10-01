import React from 'react';

export default class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercicio: null,
    };
  }

  render() {
    return (
      <div>
        Contador
      </div >
    )
  }
}
