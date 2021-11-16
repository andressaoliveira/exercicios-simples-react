import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { getLocais } from "./components/ListaLocais/ListaLocais";

export default class Destinos extends React.Component {
    render() {
        let locais = getLocais();
        return (
            <div className="w-100 text-center">
                {
                    locais.map((local, key) => {
                        return <div key={key}>
                            <h5>{local.nome}</h5>
                            {
                                local.fotos.map((foto, subkey) => {
                                    return <img className="foto" src={foto} alt={foto} key={subkey}></img>
                                })
                            }
                            <p>{local.descricao}</p>
                        </div>
                    })
                }
            </div>
        );
    }
}