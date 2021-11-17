import React from "react";

class home extends React.Component{
    render(){
        return(
            <div className="corpo">
                <h1>Home</h1>
                <h3>Escolha seu destino:</h3>
                <select>
                    <option></option>
                    <option>Belo Horizonte</option>
                    <option>São Paulo</option>
                    <option>Rio de Janeiro</option>
                </select>
            </div>
        )
    }
}

export default home