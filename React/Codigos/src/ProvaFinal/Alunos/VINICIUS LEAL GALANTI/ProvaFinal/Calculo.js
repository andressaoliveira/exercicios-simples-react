import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

function Divisivel(x, y) {
    let modulo = x % y;

    if (modulo === 0)
        return true

    return false;
}

class Calculo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {x: 0, y: 0, response: false}
    }

    calc = (x, y) => {
        if(x === 0 && y === 0){
            alert("Todos os campos precisam ser preenchidos.");
        }
        else{
            let divisivel = Divisivel(x, y);

            if( divisivel )
                this.setState({ response: `${x} é divisível por ${y}` });
            else
                this.setState({ response: `${x} não é divisível por ${y}` });
        }
    }

    render(){
        return (
            <Form>
                <Row>
                    <h2>Calculus</h2>
                    <Col xs={6} md={6} sm={12}>
                        <Form.Control type="text" placeholder="Primeiro número" onChange={(e) => this.setState({x: e.target.value})} />
                    </Col>
                    <Col xs={6} md={6} sm={12}>
                        <Form.Control type="text" placeholder="Segundo número" onChange={(e) => this.setState({y: e.target.value})}  />
                    </Col>
                    <Col xs={12} md={12} sm={12}> 
                        <Button variant="success" onClick={(e) => this.calc(this.state.x, this.state.y)}>Calcular</Button>
                    </Col>
                    <Col xs={12} md={12} sm={12}> 
                        <label>{this.state.response}</label>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export { Divisivel, Calculo };