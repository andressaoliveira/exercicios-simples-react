import React from "react";

class Combustivel extends React.Component{
    // velocidade = 0;
    
    // constructor(){
    //     super();
    //     this.state = { velocidade: 0 };
    // }

    constructor(props){
        super(props);
        this.state = {
            tempo: 0,
            velMed: 0,
            rendMed: 0,
            gasPreco: 0,
            total: 0,
            combustivel: 0,
            distancia: 0
        };
    }

    calc = () => {
        let distancia = this.state.tempo * this.state.velMed;
        let combustivel = distancia / this.state.rendMed;
        let total = combustivel * this.state.gasPreco;

        console.log(distancia, combustivel, total);
        
        this.setState({ distancia: distancia, combustivel: combustivel.toFixed(2), total: total.toFixed(2) });

        document.getElementById('resposta').style.display = 'block';
    }

    render(){
        return (
            <div id="combustivel">
                <h2>Combustível</h2>
                <form>
                    <div>
                        <label>Tempo (Horas)</label>
                        <input id="tempo" type="number" onChange={(e) => this.setState( { tempo : e.target.value } )}></input>
                    </div>
                    <div>
                        <label>Velocidade média (Km/hr)</label>
                        <input id="velMed" type="number" onChange={(e) => this.setState( { velMed : e.target.value } )}></input>
                    </div>
                    <div>
                        <label>Rendimento médio (Km/Litros)</label>
                        <input id="rendMed" type="number" onChange={(e) => this.setState( { rendMed : e.target.value } )}></input>
                    </div>
                    <div>
                        <label>Preço gasolina (R$)</label>
                        <input id="gasPreco" type="number" onChange={(e) => this.setState( { gasPreco : e.target.value } )}></input>
                    </div>
                    <button type="button" onClick={ this.calc }>Teste</button>
                </form>
                <div id="resposta" style={{ display: "none" }}>
                    <label>Velocidade média: { this.state.velMed } Km/hr</label>
                    <br/>
                    <label>Tempo gasto: { this.state.tempo } horas</label>
                    <br/>
                    <label>Rendimento: { this.state.rendMed } Km/litros</label>
                    <br/>
                    <label>Distância: { this.state.distancia } Km</label>
                    <br/>
                    <label>Combustível: { this.state.combustivel} litros</label>
                    <br/>
                    <label>Valor total: R${ this.state.total }</label>
                    <br/>
                </div>
            </div>
        );
    }
}

// class Combustivel extends React.Component{
//     render(){
//         return (
//             <div className="body">
//                 <h1>Combustivel</h1>

//                 <div className="col-md-3">
//                     <div className="row">
//                         <div className="col-md-12">
//                             <FormLabel>Tempo (em horas)</FormLabel>
//                             <FormControl onChange={(e) => this.setState({tempo: e.target.value})} />
//                         </div>
//                         <div className="col-md-12">
//                             <FormLabel>Velocidade Média (em km/h)</FormLabel>
//                             <FormControl onChange={(e) => this.setState({vel: e.target.value})} />
//                         </div>
//                         <div className="col-md-12">
//                             <FormLabel>Rendimento médio (em km/litros)</FormLabel>
//                             <FormControl onChange={(e) => this.setState({rendimento: e.target.value})} />
//                         </div>
//                         <div className="col-md-12">
//                             <FormLabel>Preço Gasolina (em reais R$)</FormLabel>
//                             <FormControl onChange={(e) => this.setState({preco: e.target.value})} />
//                         </div>
//                         <div className="col-md-12">
//                             <Button onClick={this.calcular} style={{marginTop: 15}}>Calcular</Button>
//                         </div>
//                         {this.state.show && (
//                             <div className="row" style={{marginTop: 10}}>
//                                 <div className="col-md-12">
//                                     <label>Velocidade Média: {this.state.vel} km/h</label>
//                                 </div>
//                                 <div className="col-md-12">
//                                     <label>Tempo gasto: {this.state.tempo} horas</label>
//                                 </div>
//                                 <div className="col-md-12">
//                                     <label>Rendimento: {this.state.rendimento} km/litros</label>
//                                 </div>
//                                 <div className="col-md-12">
//                                     <label>Distancia: {this.state.distancia} km</label>
//                                 </div>
//                                 <div className="col-md-12">
//                                     <label>Combustivel: {this.state.combustivel} litros</label>
//                                 </div>
//                                 <div className="col-md-12">
//                                     <label>Valor total: R$ {this.state.total}</label>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
                
//             </div>
//         )
//     }
// }

export default Combustivel;