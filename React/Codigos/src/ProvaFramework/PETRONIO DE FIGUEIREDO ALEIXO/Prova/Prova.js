import React, { useEffect, useState } from 'react'
import './Prova.css'
import Inicio from './Inicio.js'
import Destino from './Destino.js'
import Combustivel from './Combustivel.js'

function Prova() {

  const [component, setComponent] = useState("Inicio")
  const [DestinoSelected, setDestinoSelected] = useState("")

  return (
    <div className="Prova">
      <div className="menu">
        <ul>
          <li><button onClick={() => setComponent("Inicio")}>Inicio</button></li>
          <li><button onClick={() => setComponent("Destino")}>Destino</button></li>
          <li><button onClick={() => setComponent("Combustivel")}>Combustivel</button></li>
        </ul>
      </div>
      <main>
        {
          component === "Inicio" &&
          <Inicio DestinoSelected={DestinoSelected} setDestinoSelected={setDestinoSelected} />
        }
        {
          component === "Destino" &&
          <Destino DestinoSelected={DestinoSelected} />
        }
        {
          component === "Combustivel" &&
          <Combustivel />
        }
      </main>
    </div>
  );
}

export default Prova;
