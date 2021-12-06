import React from 'react';
import api from './api';

export default class Cargos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cargos: [],

        }
    }

    componentDidMount() {
        api.get("/21/cargos", {
            "Content-Type": "application/xml; charset=utf-8"
        }).then((response) => this.setCargos(response.data.CargoParlamentar.Parlamentar.Cargos.Cargo))
    }

    setCargos(dados) {
        this.setState({
            cargos: dados
        })
    }




    render() {
        const { cargos } = this.state;
        return (
            <div className="cargo">
                <br/>
                <h1>Cargos</h1>
                <ul className = "cargos">
                    {cargos.map((item, index) => (
                        <li key={index}>
                            <p>cargo: {item.CodigoCargo} </p>
                            <p>Descrição: {item.DescricaoCargo}</p>
                            <p>Início: {item.DataInicio}</p>
                            <p>Fim: {item.DataFim}</p>
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}

/*
<span>{info.Servico[1].NomeServico
{
            info.map((item, index) => (
              <li key={index}>
                <p>Nome: {item.NomeServico}</p>
              </li>
            ))
          }
        }
*/