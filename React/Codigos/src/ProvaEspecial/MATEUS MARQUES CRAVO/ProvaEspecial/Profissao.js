import React from 'react';
import api from './api';

export class Profissao extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            profissoes: [],
            nomeSenador: ''
        };
    }

    retornaDados = () => {
        var idSenador = document.getElementById("idSenador").value;
        let component = this;
        api.get("/" + idSenador + "/profissao")
        .then((response)=> {        
            let profissoesRetornadas = response.data.ProfissaoParlamentar.Parlamentar.Profissoes.Profissao;        
            const retorno = profissoesRetornadas.map((item, i) => {
                return (
                    <div>
                        <h1>Profissão {i + 1}</h1>

                        <p>Nome Profissão: {item.NomeProfissao}</p>     
                        <p>Atividade Principal?: {item.IndicadorAtividadePrincipal}</p> 
                        <hr />
                    </div>
                )
            });


            component.setState({
                profissoes: retorno,
                nomeSenador: response.data.ProfissaoParlamentar.Parlamentar.Nome
            });
        })
        .catch((err) => {
            console.error(err);

            const retorno = "Não encontrado!";

            component.setState({
                profissoes: retorno,
                nomeSenador: ''
            });
        })
    }

    render() {
        const { profissoes, nomeSenador } = this.state; 

        return (
            <div className="flex-9">
                <h1>Profissões</h1>

                <input id="idSenador" type="number" /><br />
                <button name="retornaProfissoes" type='button' onClick={this.retornaDados}>Buscar</button>      
                
                <div>
                    { nomeSenador === '' ? null : <span>Nome Senador: {nomeSenador}</span>}
                    {profissoes}  
                </div>                  
            </div>
        )
    }
}