import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

import api from "./api";


export default function Cargos() {
    const [cargos, setCargos] = useState();

    useEffect(() => {
        api.get("cargos")
            .then((response) => setCargos(response.data.CargoParlamentar.Parlamentar.Cargos.Cargo))
            .catch((error) => console.error("Something went wrong :( \n Error:" + error));
    }, []);

    return (
        <Row>
            <h2 style={{ marginBottom: "30px" }}>Cargos</h2>
            {/* {console.log(cargo)} */}
            {cargos?.map((cargo) =>
                <div>
                    <p>
                        Cargo: {cargo.CodigoCargo}
                        <br/>
                        Descricao: {cargo.DescricaoCargo}
                        <br/>
                        Início: {cargo.DataInicio}
                        <br/>
                        Fim: {cargo.DataFim}
                    </p>
                </div>
            )}
        </Row>
    );
}