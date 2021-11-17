import React, { useState, useEffect } from 'react';
import '../Style.scss';

function Combustivel(){
    const [tempo, setTempo] = useState(0);
    const [veloc, setVeloc] = useState(0);
    const [rendi, setRendi] = useState(0);
    const [combu, setCombu] = useState(0);
    const [dista, setDista] = useState(0);
    const [total, setTotal] = useState(0);
    const [click, setClick] = useState(0);

    useEffect(() => {
        var pr = 0;
        if(!document.getElementById("t").value){
            pr = 0;
        }else {
            pr = parseInt(document.getElementById("t").value);
        }
        setTempo(pr.toFixed(2))

        var pr1 = 0;
        if(!document.getElementById("v").value){
            pr1 = 0;
        }else{
            pr1 = parseInt(document.getElementById("v").value);
        }
        setVeloc(pr1.toFixed(2))

        var pr2 = 0;
        if(!document.getElementById("r").value){
            pr2 = 0;
        }else {
            pr2 = parseInt(document.getElementById("r").value);
        }
        setRendi(pr2.toFixed(2))

        var pr3 = 0;
        var te = 0;
        var ve = 0;
        var pr4 = 0;
        var preco = 0;
        var med = 0;
        var pr5 = 0;
        if(!document.getElementById("t").value & !document.getElementById("v").value & !document.getElementById("g").value & !document.getElementById("r").value){
            pr3 = 0;
        }else{
            preco = document.getElementById("g").value;
            med = document.getElementById("r").value;
            te = parseInt(document.getElementById("t").value);
            ve = parseInt(document.getElementById("v").value);
            pr3 = te * ve;
            pr4 = pr3 / med;
            pr5 = pr4 * preco;

        }
        setDista(pr3.toFixed(2))
        setCombu(pr4.toFixed(2))
        setTotal(pr5.toFixed(2))


    }, [click]);


    return( 
    <div className="col">
        <div className="col-1">
            <div className="div">
                <form>
                    <center>
                        <div className="Inputs">
                            <label>Tempo:</label><br/>
                            <input type="number" name="tempo" id="t" placeholder="Tempo"></input>
                            <label>[Em Horas]</label>
                        </div>
                        <div className="Inputs">
                            <label>Velocidade Média:</label><br/>
                            <input type="number" id="v" placeholder="Velocidade"></input>
                            <label>[Em km/h]</label>
                        </div>
                        <div className="Inputs">
                            <label>Rendimento médio:</label><br/>
                            <input type="number" id="r" placeholder="Rendimento"></input>
                            <label>[Em km/L]</label>
                        </div>
                        <div className="Inputs">
                            <label>Preço Gasolina:</label><br/>
                            <input type="number"  id="g" placeholder="Preço Gasolina"></input>
                            <label>[Em R$]</label>
                        </div>
                        <button type="button" onClick={() => setClick(click + 1)}>Calcular</button>
                        <div>
                            <label> Tempo gasto: {tempo} Hr. </label><br/>
                            <label> Velocidade média: {veloc} km/h. </label><br/>
                            <label> Rendimento médio: {rendi} km/l. </label><br/>
                            <label> Distancia percorrida: {dista} km. </label><br/>
                            <label> Combustivel gasto: {combu} L. </label><br/>
                            <label> Valor total: R$ {total}. </label>
                        </div>
                    </center>
                </form>
            </div>
        </div>
    </div>);
}

export default Combustivel;