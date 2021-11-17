function Inicio({DestinoSelected , setDestinoSelected}) {
  return (
    <div className="Inicio">
      Inicio
      <select value={DestinoSelected} onChange={(e)=>setDestinoSelected(e.target.value)/* escolemos o ligar Gramado,Bahia ou Buenos Aires */}>
          <option value="Gramado">Gramado</option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Bahia">Bahia</option>
      </select>
    </div>
  );
}

export default Inicio;
