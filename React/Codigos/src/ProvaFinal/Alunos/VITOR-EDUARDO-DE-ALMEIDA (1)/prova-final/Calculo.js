import React from 'react';
import { FormControl, FormLabel, Button } from "react-bootstrap";

class Calculo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {numb1: 0, numb2: 0, show: false}
    }

    calcular(numb1, numb2){
        if(numb1 == 0 && numb2 == 0){
            alert("Preencha os campos que estão faltando!");
            return false;
        }
        else{
            const divisivel = numb1 % numb2;
            alert(numb1+" "+(divisivel == 0 ? "é " : "não é ")+"divisivel por "+numb2)

            return (divisivel == 0 ? true : false);
        }
    }
    
    render() {
        return (
            <div className="body" style={{padding: "5px"}}>
                <h3>Calculo</h3>

                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <FormLabel>Primeiro número:</FormLabel><br/>
                            <FormControl onChange={(e) => this.setState({numb1: e.target.value})} />
                        </div>

                        <div className="col-md-6">
                            <FormLabel>Segundo número:</FormLabel><br/>
                            <FormControl onChange={(e) => this.setState({numb2: e.target.value})} />
                        </div>
                        
                        <div className="col-md-3">
                            <Button onClick={(e) => this.calcular(this.state.numb1, this.state.numb2)}>Calcular</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculo;