import React from "react";

import bh from "../Img/belo-horizonte.jpg";
import sp from "../Img/sao-paulo.jpg";
import rj from "../Img/rio-de-janeiro.jpg";

class Local extends React.Component{
    render(){
        return (
            <div className="body">
                <h1>Opções de destino</h1>

                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{marginTop: 40, marginBottom: 20}}>Belo Horizonte</h2>
                        <img style={{height: 200, width: 300}} src={bh}/>
                        <img style={{height: 200, width: 300}} src={bh}/>
                        <img style={{height: 200, width: 300}} src={bh}/>
                        <p style={{marginTop: 20}}>Belo Horizonte é a capital do estado de Minas Gerais, no sudeste do Brasil. Rodeada de montanhas, a cidade é conhecida pelo enorme Estádio Mineirão. Construído em 1965, o estádio alberga também o Museu Brasileiro do Futebol. Nas proximidades encontra-se a Lagoa da Pampulha e o Conjunto Arquitetónico da Pampulha, que inclui a Igreja de São Francisco de Assis, cujo teto é ondulado e que foi concebida pelo arquiteto modernista brasileiro Oscar Niemeyer.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{marginTop: 40, marginBottom: 20}}>São Paulo</h2>
                        <img style={{height: 200, width: 300}} src={sp}/>
                        <img style={{height: 200, width: 300}} src={sp}/>
                        <img style={{height: 200, width: 300}} src={sp}/>
                        <p style={{marginTop: 20}}>São Paulo é uma das 27 unidades federativas do Brasil. Está situado na Região Sudeste e tem por limites os estados de Minas Gerais a norte e nordeste, Paraná a sul, Rio de Janeiro a leste e Mato Grosso do Sul a oeste, além do Oceano Atlântico a sudeste.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{marginTop: 40, marginBottom: 20}}>Rio de Janeiro</h2>
                        <img style={{height: 200, width: 300}} src={rj}/>
                        <img style={{height: 200, width: 300}} src={rj}/>
                        <img style={{height: 200, width: 300}} src={rj}/>
                        <p style={{marginTop: 20}}>O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do Corcovado, e pelo Pão de Açúcar, um pico de granito com teleféricos até seu cume. A cidade também é conhecida pelas grandes favelas. O empolgante Carnaval, com carros alegóricos, fantasias extravagantes e sambistas, é considerado o maior do mundo.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Local