import React from "react";
import Select from 'react-select'

const options = [
  { value: 'São Tome das Letras', label: 'São Tome das Letras ' },
  { value: 'Belo Horizonte', label: 'Belo Horizonte' },
  { value: 'São Paulo', label: 'São Paulo' }
]

export const Home = () => {
  return (
    <div className="home">
      <h1>Início</h1>
      <h6>Escolha seu destino</h6>
      <div className="selector">
      <Select options={options} />
      </div>
    </div>
  );
};
