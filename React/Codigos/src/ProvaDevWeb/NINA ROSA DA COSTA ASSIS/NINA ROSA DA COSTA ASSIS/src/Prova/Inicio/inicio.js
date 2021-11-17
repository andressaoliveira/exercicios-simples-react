import React, {useState} from "react";
import Input from "../../Input";

export default () => {

  const [destino, setDestino] = useState(0)


  const value = (event) => {setDestino((event.target.value)) }

return <div>
<h2>Início</h2>
Escolha o seu destino:
<select>
    <option value="south-africa">África do Sul</option>
    <option value="ldn">Inglaterra</option>
    <option value="esp">Espanha</option>
  </select>;
  
<Input onChange={value}></Input>

</div>
};
