import Divisivel from "./Calculo"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Senador from "./Senador";
import Extra from "./Extra";
function Principal() {
  return (
    <BrowserRouter>
      <Link to="/">|  página Divisível  |</Link>
      <Link to="/senador">|  página Senador  |</Link>
      <Link to="/extra">|  página Extra  |</Link>
      <Routes>
        <Route path="/" element={<Divisivel></Divisivel>}></Route>
        <Route path="/senador" element={<Senador></Senador>}></Route>
        <Route path="/extra" element={<Extra></Extra>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Principal;