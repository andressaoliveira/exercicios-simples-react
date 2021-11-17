import diamantina1 from '../imgs/diamantina_1.jpg';
import diamantina2 from '../imgs/diamantina_2.jpg';
import mariana1 from '../imgs/mariana_1.jpg';
import mariana2 from '../imgs/mariana_2.jpg';
import op1 from '../imgs/op_1.jpg';
import op2 from '../imgs/op_2.jpg';
import './Destinos.css'

export function Destinos() {
    return (
        <div className="bodyDestinos">
            <div className="cidade">
                <h2>Diamantina</h2>
                <div className="fotos">
                    <img className="foto" alt="foto diamantina" src={diamantina1}/>
                    <img className="foto" alt="foto diamantina" src={diamantina2}/>
                </div>
                <p>Diamantina é um município brasileiro do estado de Minas Gerais localizado na Mesorregião do Jequitinhonha. Município conhecido pelo carnaval e turismo histórico.</p>
            </div>

            <div className="cidade">
                <h2>Mariana</h2>
                <div className="fotos">
                    <img className="foto" alt="foto mariana" src={mariana1}/>
                    <img className="foto" alt="foto mariana" src={mariana2}/>
                </div>
                <p>Mariana foi a primeira vila, cidade e capital do estado de Minas Gerais. No século XVIII, foi uma das maiores cidades produtoras de ouro para o Império Português. Tornou-se a primeira capital mineira por participar de uma disputa onde a Vila que arrecadasse maior quantidade de ouro seria elevada a Cidade sendo a capital da então Capitania de Minas Gerais.</p>
            </div>

            <div className="cidade">
                <h2>Ouro Preto</h2>
                <div className="fotos">
                    <img className="foto" alt="foto ouro preto" src={op1}/>
                    <img className="foto" alt="foto ouro preto" src={op2}/>
                </div>
                <p>Localizada na região Central de Minas Gerais, a cidade de Ouro Preto reúne o maior e mais importante acervo da arquitetura e da arte do período colonial de todo o Brasil. Em meio ao casario dos séculos 17 e 18, construído nas ladeiras de uma região montanhosa, erguem-se 13 igrejas monumentais, com altares banhados a ouro e imagens sacras, nos estilos barroco e rococó.</p>
            </div>
        </div>
    )
}

export default Destinos;