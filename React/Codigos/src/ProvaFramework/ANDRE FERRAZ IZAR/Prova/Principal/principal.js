import React from "react";

export default class Principal extends React.Component{
//select feito para a pessoa selecionar a cidade
    render(){
        return(
            <div className="principal">
                <select name="select">
                    <option value="1" selected>Alagoinha</option>
                    <option value="2">Barreiras</option>
                    <option value="3">Natal</option>
                </select>
            </div>
        )
    }
}