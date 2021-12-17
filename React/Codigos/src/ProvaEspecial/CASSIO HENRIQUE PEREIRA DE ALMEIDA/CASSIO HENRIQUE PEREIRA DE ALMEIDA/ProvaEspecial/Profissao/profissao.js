import React, { useState, useContext, useEffect, Link } from 'react';
import api from '../Services/api'

export default function Profissao({...props}) {
    const data = props.data

    const listItems = data.Profissao.map((x) =>
        <div style={{marginTop: 20, borderTop: '1px solid black'}}>
            <b>Nome Profissão:</b> {x.NomeProfissao}
            <br></br>
            <b>Indicador Atividade Principal:</b> {x.IndicadorAtividadePrincipal}
            <br></br>
        </div>
    );

    return(
        <div style={{marginLeft: '50px'}}>
            <h1>Profissão</h1>
            {listItems}
        </div>
    )
}
