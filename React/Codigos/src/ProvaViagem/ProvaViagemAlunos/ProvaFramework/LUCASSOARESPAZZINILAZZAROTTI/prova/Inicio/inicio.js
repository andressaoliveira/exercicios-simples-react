import React from 'react';
export default class inicio extends React.Component{
    render(){
        return (
            <div>
                <select name="destinos" id="destinos">
  <option value="Belo Horizonte">Belo Horizonte</option>
  <option value="RJ">Rio de Janeiro</option>
  <option value="FT">Fortaleza</option>
</select>
            </div>
        )
    }
}