import React, { useEffect, useState } from 'react'
import './Prova43.css'
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
          {<li><button onClick={() => setComponent("Inicio")}>Inicio</button></li>/* ir para as seguintes paginas */}
          <li><button onClick={() => setComponent("Destino")/* ir para as seguintes paginas */}>Destino</button></li>
          <li><button onClick={() => setComponent("Combustivel")/* ir para as seguintes paginas */}>Combustivel</button></li>
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
