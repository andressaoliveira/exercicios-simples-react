import  Navbar  from "../nav/index";
import cabofrio1 from '../img/CaboFrio1.jpg'
import CaboFrio2 from '../img/CaboFrio2.jpg'
import CaboFrio3 from '../img/CaboFrio3.jpg'
import guarapari1 from '../img/Guarapari1.jpg'
import guarapari2 from '../img/Guarapari1.jpg'
import guarapari3 from '../img/Guarapari1.jpg'
import ouropreto1 from '../img/ouropreto1.jpg'
import ouropreto2 from '../img/ouropreto2.jpg'
import ouropreto3 from '../img/ouropreto3.jpg'
export function Destino(){
    return(
    <div>
        <Navbar />
        <h1>Pagina Destino</h1>
        <div>
            <title> Cabo Frio</title>
            <img src={cabofrio1} alt="CaboFrio1" />
            <img src={CaboFrio2} alt="CaboFrio2" />
            <img src={CaboFrio3} alt="CaboFrio3" />
            <p>abo Frio é um município do estado brasileiro do Rio de Janeiro.
             As suas praias incluem a Praia das Dunas, ao centro, e a Praia do Forte,
             ambas conhecidas pela forte rebentação de ondas</p><br></br>
        </div>
        <div>
            <title> Guarapari</title>
            <img src={guarapari1} alt="Guarapari1" />
            <img src={guarapari2} alt="Guarapari2" />
            <img src={guarapari3} alt="Guarapari3" />
            <p>Guarapari é um município brasileiro no litoral do estado do Espírito Santo, Região Sudeste do país.
            Localiza-se na Região Metropolitana de Vitória</p><br></br>
        </div>
        <div>
            <title> Ouro Preto</title>
            <img src={ouropreto1} alt="Ouro Preto1" />
            <img src={ouropreto2} alt="Ouro Preto2" />
            <img src={ouropreto3} alt="Ouro Preto3" />
            <p>Ouro Preto é uma cidade colonial na Serra do Espinhaço, na zona leste do Brasil.
            É conhecida pela arquitetura barroca, que inclui pontes, fontes e praças, e pelas ruas calcetadas íngremes e sinuosas.</p><br></br>
        </div>    
    </div>
    );

};

