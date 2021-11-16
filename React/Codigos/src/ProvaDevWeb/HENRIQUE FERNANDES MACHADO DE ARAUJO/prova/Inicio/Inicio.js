import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormSelect } from 'react-bootstrap';

class Inicio extends React.Component{
    render(){
        return (
            <div className="body">
                <h1>inicio</h1>
                <FormSelect>
                    <option>Belo Horizonte</option>
                    <option>São Paulo</option>
                    <option>Rio de Janeiro</option>
                </FormSelect>
            </div>
        )
    }
}

export default Inicio