import React, { Component } from 'react';
import Select from 'react-select';


const options = [
  { value: 'toronto', label: 'Toronto' },
  { value: 'manchester', label: 'Manchester' },
  { value: 'oslo', label: 'Oslo' }
]

const InicioSelect = () => (
    
  <Select options={options} />
)
export default InicioSelect;