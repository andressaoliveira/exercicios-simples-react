import React from "react";

export const Calcular = {
    calc(n1, n2) {    
    return n1 % n2;    
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

    resultado(n1, n2){
        console.log(n1);
        console.log(n2);
        const rest = n1 % n2;
        console.log(rest);
        if(rest == 0){
            this.setState({resultado: n1 + " é divisível por " + n2});
        }else if (rest != 0) {
            this.setState({resultado: n1 + " não é divisível por " + n2});
        } else {
            this.setState({resultado: "Erro"});
        }
    }

    changeNumA(newNumA){
        this.setState({numA: newNumA});
    }
    changeNumB(newNumB){
        this.setState({numB: newNumB});
    }

    render(){
        const {numA, numB, resultado} = this.state;
        return(
          <div>
              <h4><strong>Divisivel</strong></h4>
              <div>
              <label>Primeiro número: </label> <input onChange={(e) => this.changeNumA(e.target.value)} />
              </div>
              <div>
              <label>Segundo número: </label> <input onChange={(e) => this.changeNumB(e.target.value)} />
              </div>
              <div>
              <button onClick={() => this.resultado(numA, numB)}>
                Calcular
            </button>
              </div>
              <div id="resultado">
                    {resultado}
                </div>   
          </div>  
        );
    }
}
