
import { Navbar } from "../nav";
export function Main(){
    return(
<div>
<Navbar />
    <h1>Inicio</h1>        
    <select name="select">
        <option value="Cabo Frio">Cabo Frio</option>
        <option value="Guarapari">Guarapari</option>
        <option value="Ouro Preto">Ouro Preto</option>
    </select>
    </div>
    );
};

