import React from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";

// construção do "select" passando os valores já existentes

const options = [
  { value: "monte-verde", label: "Monte Verde" },
  { value: "ouro-preto", label: "Ouro Preto" },
  { value: "tiradentes", label: "Tiradentes" },
];

// retorno do valor do "select" setando valores do bootstrap.

class App extends React.Component {
  render() {
    return <Select className="mt-4 col-md-8 col-offset-4" options={options} />;
  }
}

export default App;
