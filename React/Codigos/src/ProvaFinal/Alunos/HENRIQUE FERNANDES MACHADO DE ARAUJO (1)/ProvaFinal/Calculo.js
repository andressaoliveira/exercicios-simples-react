import React from 'react';
import { FormControl, FormLabel, Button } from "react-bootstrap";

class Calculo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {num1: 0, num2: 0, mostrar: false}
    }

    // handlerChange(name, event){
    //     this.setState({...this.state, [name]: parseFloat(event.target.value)})
    // }

    calcular(num1, num2){
        if(num1 == 0 && num2 == 0){
            alert("Favor preencher todos os campos");
            return false;
        }
        else{
            const divisivel = num1 % num2;
            alert(num1+" "+(divisivel == 0 ? "é " : "não é ")+"divisivel por "+num2)

            return (divisivel == 0 ? true : false);
        }
    }
    
    render() {
        return (
            <div className="body" style={{padding: "10px"}}>
                <h3>Calculo</h3>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <FormLabel>Numero 1</FormLabel>
                            <FormControl onChange={(e) => this.setState({num1: e.target.value})} />
                        </div>
                        <div className="col-md-6">
                            <FormLabel>Numero 2</FormLabel>
                            <FormControl onChange={(e) => this.setState({num2: e.target.value})} />
                        </div>
                        <div className="col-md-3" style={{paddingTop: "10px"}}>
                            <Button onClick={(e) => this.calcular(this.state.num1, this.state.num2)}>Calcular</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculo;