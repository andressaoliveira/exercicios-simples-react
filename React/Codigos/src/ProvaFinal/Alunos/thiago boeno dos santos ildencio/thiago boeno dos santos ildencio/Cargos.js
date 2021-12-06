import axios from './api';
import { useState, useEffect } from 'react';

const Cargos = () => {
  const [cargos, setCargos] = useState([]);
  
  useEffect(() => {
    const fetchCargos = async () => {
      const res = await axios.get('/41/cargos');
      
      setCargos(res.data.CargoParlamentar.Parlamentar.Cargos.Cargo);
    };

    fetchCargos();
  }, [])

  return (
    <section className="content">
      <h1>Cargos</h1>

      <div className="dados-senador">
        { cargos && cargos.map((cargo, index) => (
          <div key={index} className="dados-senador">
            <span>Cargo: {cargo.CodigoCargo} - {cargo.DataFim}</span>
    
            <span>Descrição: {cargo.DescricaoCargo}</span>
    
            <span>Início: {cargo.DataInicio}</span>
          </div>
        )) }
      </div>
    </section>
  );
}

export default Cargos;