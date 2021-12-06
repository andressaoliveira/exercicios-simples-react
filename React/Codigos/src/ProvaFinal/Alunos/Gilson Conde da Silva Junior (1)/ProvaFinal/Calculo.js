import React from "react";

export const Calcular = {
    calcularResto(numA, numB) {    
        return numA % numB;    
  },
}

export default class Calculo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numA: '',
            numB: '',
            resultado: ''
        }
    }
    changeNumA(newNumA){
        this.setState({numA: newNumA});
    }
    changeNumB(newNumB){
        this.setState({numB: newNumB});
    }
    mostraResultado(numA, numB){
        const rest = numA % numB;
        console.log(rest);
        if(rest == 0){
            this.setState({resultado: numA + " é divisível por " + numB});
        }else if (rest != 0) {
            this.setState({resultado: numA + " não é divisível por " + numB});
        } else {
            this.setState({resultado: "0"});
        }
    }   
    render(){
        const {numA, numB, resultado} = this.state;
        return(
          <div>
              <h4><strong>Divisivel</strong></h4>
              <div>
              <label>Primeiro número: </label> <input onChange={(e) => this.changeNumA(e.target.value)} />
              <label>Segundo número: </label> <input onChange={(e) => this.changeNumB(e.target.value)} />
              </div>
              <button onClick={() => this.mostraResultado(numA, numB)}>Calcular</button>
               <p> {resultado} </p>
          </div>  
        );
    }
}
