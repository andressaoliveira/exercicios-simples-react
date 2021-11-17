import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
  const [city, setCity] = useState("sp")

  useEffect(() => {
    let destiny = ""
    
    if(city == "sp"){
      destiny = "São Paulo"
    }else if(city == "rj"){
      destiny = "Rio de Janeiro" 
    }else{
      destiny = "Vitória"
    }
    sessionStorage.setItem("destiny", destiny)
  }, [city])

  return (
    <div className="home">
      <div className="top">
        <h2>Inicio</h2>
      </div>
      <br />

      <span className="chooseDestination">
        <h2>Destino</h2>
        <select onChange={(e) => setCity(e.target.value)}>
          <option value="sp" selected>São Paulo</option>
          <option value="rj">Rio de janeiro</option>
          <option value="v">Vitória</option>
        </select>
      </span>
    </div>
  );
}

export default Home;