import React from "react";

export default class Destino extends React.Component{


        constructor(props){
            super(props)
          this.state = {    
          }
        }


    render(){
    return(
        <div>
            <select value = {this.state.destino}>
                <option value = "null"></option>
                <option value = "SP">São Paulo</option>
                <option value = "RJ">Rio de Janeiro</option>
                <option value = "ES">Vitória</option>
            </select>

        </div>
        );
    }


}
