import React from 'react';

export default class Idade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercicio: null,
    };
  }

  render() {
    return (
      <div>
        Idade
      </div >
    )
  }
}
