import React from "react";

const lugares = ["Jotunheim", "Asgard", "Midgard"];

class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {select: lugares[0]};
  }
  handleChange(event) {
    this.setState({select: event.target.value})
  }
  render() {
    return(
      <div className="main">
        <h1>Início</h1>
        <p>Selecione o destino:</p>
        {/* Select com forEach para cada destino. */}
        <select name="select" defaultValue={this.state.selected} onChange={this.handleChange}>
          {lugares.map(item => <option value={item} key={item}>{item}</option>)}
        </select>
      </div>
    )
  }
}

export default Inicio