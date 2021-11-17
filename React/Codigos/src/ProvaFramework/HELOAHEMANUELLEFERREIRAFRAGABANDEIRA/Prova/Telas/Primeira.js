import React from 'react';

class Primeira extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'STdL'};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <form>
          <label>
           Escolha seu destino:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="STdL">São Thomé das Letras</option>
              <option value="Cap">Capitólio</option>
              <option value="SdC">Serra do Cipó</option>
            </select>
          </label>
        </form>
      );
    }
  }

  export default Primeira;