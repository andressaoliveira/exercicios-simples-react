// import React, { useState } from 'react';

export default function Inicio() {
    return (
        <div>
            <h2>Início</h2>
            <div>
                <p>Escolha seu destino:</p>
                <select name="curso" id="curso">
                    <option value="stl">São Thomé das Letras</option>
                    <option value="cap">Capitólio</option>
                    <option value="sci">Serra do Cipó</option>
                </select>
            </div>
        </div>
    )
}