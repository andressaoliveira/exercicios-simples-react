import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Calculo } from "./Calculo";
import { Senador } from "./Senador";
import { Cargos } from "./Cargos";
import { Menu } from "./Menu";

export function Principal() {
  return (
    <BrowserRouter>
      <Menu />
      <main>
        <Routes>
          <Route exact path="/Cargos" element={<Cargos />} />
          <Route exact path="/Senador" element={<Senador />} />
          <Route exact path="/" element={<Calculo />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
