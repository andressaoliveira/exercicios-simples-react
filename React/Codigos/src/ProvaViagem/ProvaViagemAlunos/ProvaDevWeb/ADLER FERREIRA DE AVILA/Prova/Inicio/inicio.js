import React from "react";

export default class inicio extends React.Component {
  render(){
    return(
      <div>
        <label>Escolha seu destino: </label>
        <select name="locais" id="locais">
          <option value="disney">Disney</option>
          <option value="Beach Park">Beach Park</option>
          <option value="Hopi Hari">Hopi Hari</option>
        </select>
    </div>
    )
  }
}