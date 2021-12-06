import React, { useState, useContext, useEffect, Link } from 'react';
import api from '../api'

export default function Filiacoes({ ...props }) {
    const data = props.data

    const items = data?.Filiacoes?.Filiacao.map((x) =>
        <div style={{marginTop: 20}}>
            <li>Data Filiação: {x.DataFiliacao}</li>
            <li>Data Desfiliação: {x.DataDesfiliacao}</li>
            <li>Partido: {x.Partido.CodigoPartido + "-" + x.Partido.NomePartido + "-" + x.Partido.SiglaPartido}</li>
        </div>
    );
    return(
        <div style={{marginLeft: '50px'}}>
            <h1>Filiações</h1>
            {items}
        </div>
    )
}
