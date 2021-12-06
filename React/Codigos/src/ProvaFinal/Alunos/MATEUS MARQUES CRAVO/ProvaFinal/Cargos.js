import React from 'react';
import api from './api';

export class Cargos extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            cargos: []
        };
    }

    componentDidMount(){
        let component = this;
        api.get("/cargos")
        .then((response)=> {        
            let cargosRetornados = response.data.CargoParlamentar.Parlamentar.Cargos.Cargo;        
            const retorno = cargosRetornados.map((item, i) => {
                return (
                    <div>
                        <p>Cargo: {item.CodigoCargo} - {item.DataFim}</p>                    
                        <p>Descrição: {item.DescricaoCargo}</p>                                     
                        <p>Início: {item.DataInicio}</p>                                   
                        <h3>Identificação Comissão</h3>                                     
                        <p>Comissão: {item.IdentificacaoComissao.CodigoComissao} - {item.IdentificacaoComissao.SiglaComissao}</p>                                       
                        <p>Nome Comissão: {item.IdentificacaoComissao.NomeComissao}</p>                                       
                        <p>Sigla Casa Comissão: {item.IdentificacaoComissao.SiglaCasaComissao}</p>   
                        <br />
                    </div>
                )
            });


            component.setState({
                cargos: retorno
            });

            console.log(cargosRetornados)
        })
        .catch((err) => {
            console.error("Error");
        })
    }

    render() {
        const { cargos } = this.state;
        return (
            <div className="flex-9">
                <h1>Cargos</h1>
                {cargos}
            </div>
        )
    }
}