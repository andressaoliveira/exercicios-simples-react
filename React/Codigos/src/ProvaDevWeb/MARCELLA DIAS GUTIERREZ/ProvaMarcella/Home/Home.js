import React from "react";
import './Home.css'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Jurubeba'};
      }
      handleChange = (event) => {
        this.setState({value: event.target.value});
        alert('Seu destino será: ' +  event.target.value);
      }

    render() {
        return (
            <div className="Container" style={{display: 'flex', flexDirection: 'column'}}>
                <div className="inputs">
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Jurubeba">Jurubeba</option>
                        <option value="Dagobah">Dagobah</option>
                        <option value="Curuscant">Curuscant</option>
                    </select>
                </div>
            </div>
        )
    }
}