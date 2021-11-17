import React from 'react'

const tr1 = {width: '50%'}
const th1 = {width: '20%', height: "10%", padding: "1px"}

const div1 = {width: '100%', "text-align": 'center'}


const a = function(){



}


function pagina_combustivel(){  return(

    <div>

        <script>
            

        </script>

        <h1>Combustível</h1>
        <div style={{height: "4pt"}}></div>


        <div>
            <table style={{width: '100%'}}>
                <tr style={{tr1}}>
                    <th style={th1}><h2>Tempo: </h2></th>
                    <th style={th1}><input type="number" id="i-tempo"></input></th>
                    <th style={th1}><h2>(Em horas)</h2></th>
                </tr>


                <tr style={{tr1}}>
                    <th style={th1}><h2>Velocidade Média: </h2></th>
                    <th style={th1}><input type="number" id="i-velocidade"></input></th>
                    <th style={th1}><h2>(em km/h)</h2></th>
                </tr>

                <tr style={{tr1}}>
                    <th style={th1}><h2>Rendimento Médio: </h2></th>
                    <th style={th1}><input type="number" id="i-rendimento"></input></th>
                    <th style={th1}><h2>(em km/litros)</h2></th>
                </tr>

                <tr style={{tr1}}>
                    <th style={th1}><h2>Preço da gosolina: </h2></th>
                    <th style={th1}><input type="number" id="i-gasolina"></input></th>
                    <th style={th1}><h2>(Em reais)</h2></th>
                </tr>

                <tr style={{width: '20%', height: "50pt", padding: "1px"}}>
                    <th style={th1}></th>
                    <th style={th1}></th>
                    <th style={th1}></th>
                </tr>

                <tr style={{tr1}}>
                    <th style={th1}><h2></h2></th>
                    <th style={th1}><button type="button" style={{width: '46%', height: "20%"}}> Calcular </button></th>
                    <th style={th1}></th>
                </tr>



            </table>
        </div>



        <div hidden>

            <div style={{height: "4pt"}}></div>
            <h2>Resultados</h2>

            <div style={{height: "2pt"}}></div>
            <table>


                <tr>
                    <th></th>
                    <th></th>
                </tr>

                <tr>
                    <th></th>
                    <th></th>
                </tr>

                <tr>
                    <th></th>
                    <th></th>
                </tr>

                <tr>
                    <th></th>
                    <th></th>
                </tr>

                <tr>
                    <th></th>
                    <th></th>
                </tr>

                <tr>
                    <th></th>
                    <th></th>
                </tr>

            </table>



        </div>


        

        



    </div>

    );

}


export default pagina_combustivel;