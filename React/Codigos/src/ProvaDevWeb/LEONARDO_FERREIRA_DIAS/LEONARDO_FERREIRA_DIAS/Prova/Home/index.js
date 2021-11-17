import React, { useState, useContext } from 'react';



export default function Home({ navigation }) {
    return(
        <div style={{marginLeft: '50px'}}>
            <h1>Início</h1>
            <p>Escolha seu destino:</p>
            <select>
            <option value="Guanhães">Guanhães</option>
            <option value="Dortmund">Dortmund</option>
            <option value="Paris">Paris</option>
          </select>
        </div>
    )
}
