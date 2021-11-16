import React from "react";

class Home extends React.Component{
    render(){
        return (
            <div id="home">
                <h2>Home</h2>
                <div>
                    <label>Escolha seu destino:</label>
                    <br/>
                    <select id="selectDestino">
                        <option value=""></option>
                        <option value="bh">Belo Horizonte</option>
                        <option value="contagem">Contagem</option>
                        <option value="betim">Betim</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Home;