import React from 'react';

export default class Calculo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercicio: null,
    };
  }

  render() {
    return (
      <div>
        Calculo
      </div >
    )
  }
}
