import React from 'react';
import { Link } from 'react-router-dom';


export default class Combustivel extends React.Component {
    Constructor(props){
        Super(props);
        this.state = {
            velocidade:"";
            tempo:"";
            distancia: 0;
            rendimento:"",
            combustivel:0,
            preco:"";
            total:0,
          };

    }

    Tempo0 =(valor) =>{
        this.setState({tempo: Valor});
      }
    

    velocidade0 =(valor) =>{
        this.setState({Velocidade: Valor});
      }


    Rendimento0 =(valor) =>{
        this.setState({rendimento: Valor});
      }
    

    preco0 =(valor) =>{
        this.setState({preco: Valor});
      }

 calculo(tempo, velocidade, preco, distancia, rendimento){
     const {testar} = this.props.location;
     distancia = parseFloat(testar);
     const tv = parseFloat(tempo) * parseFloat(velocidade);
     const dr = distancia/parseFloat(rendimento);
     const pc = parseFloat(preco) * parseFloat(dr);
     this.setState({distancia: tv});
     this.setState({combustivel: dr});
     this.setState({preco: pc});
 }

  render(){

    const { velocidade, tempo, rendimento, preço, distancia, combustivel, total } = this.state;
    const { Teste } = this.props;
    return (
        <div>
           <Link to="/">Menu Inicio</Link></br>
        <Link to={{ pathname: "/Destino", teste }}>Destino<Link/> <br/>
        <Link to={{ pathname: "/Combustivel", teste }}>Combustivel</Link> 
         <h1>Combustivel</h1>
         <p>Tempo de viajem:<Input onChange={(e) => this.Tempo0(e.target.value)}/></p>
         <p>Velocidade média:<Input onChange={(e) => this.Velocidade0(e.target.value)}/></p>
         <p>Rendimento médio:<Input onChange={(e) => this.Rendimento0(e.target.value)}/></p>
         <p>Preço do Combustivel:<Input onChange={(e) => this.preco0(e.target.value)}/></p>

<Button onClick={()=> this.calculo(tempo, velocidade, rendimento, distancia, preco)}>Calcular</Button>
<p>Tempo do Trajeto:{tempo}</p>
<p>Velocidade do carro:{velocidade}</p>
<p>Rendimento da viajem:{rendimento}</p>
<p>distancia percorrida:{distancia}</p>
<p>combustivel:{combustivel}</p>
<p>Gasto total:{total}</p>


        </div>
    )
 }
}