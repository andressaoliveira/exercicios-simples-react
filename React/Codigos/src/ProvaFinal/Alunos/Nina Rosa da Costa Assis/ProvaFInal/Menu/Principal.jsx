import { BrowserRouter, Routes, Route } from "react-router-dom"
import Calculo from "./Calculo"
import Senador from "./Senador"
import Cargos from "./Cargos"
import Sidebar from "./Sidebar"

export default () => {
    return <BrowserRouter>
        <Sidebar />
        <Routes>
            <Route path="/" element={<Calculo />}/>
            <Route path="/Calculo" element={<Calculo />}/>
            <Route path="/Senador" element={<Senador />}/>
            <Route path="/Cargos" element={<Cargos />}/>
        </Routes>
    </BrowserRouter>
}

/* import React, {useState} from "react";
import Button from "./ProvaFinal/Button";
import Calculo from "./ProvaFinal/Calculo";
import Senador from "./ProvaFinal/Senador";
import Cargos from "./ProvaFinal/Cargos"



export default () => {
     
    const [botaoCalculo, setbotaoCalculo] = useState(false) 
    const [botaoSenador, setbotaoSenador] = useState(false) 
    const [botaoCargos, setbotaoCargos] = useState(false) 

    return <div>
        <h1>PROVA FINAL</h1>

        {botaoCalculo && <Calculo></Calculo>}
        <Button onClick={()=> setbotaoCalculo(!botaoCalculo)}>Cálculo</Button>

        {botaoSenador && <Senador></Senador>}
        <Button onClick={()=> setbotaoSenador(!botaoSenador)}>Senador</Button>
        
        {botaoPage && <Cargos></Cargos>}
        <Button onClick={()=> setbotaoCargos(!botaoCargos)}>Página Adicional</Button>
    </div>
} */
